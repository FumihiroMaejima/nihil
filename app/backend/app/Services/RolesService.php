<?php

namespace App\Services;

use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Collection;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use App\Services\Notifications\RoleSlackNotificationService;
use App\Repositories\Roles\RolesRepositoryInterface;
use App\Repositories\RolePermissions\RolePermissionsRepositoryInterface;
use App\Http\Resources\RoleUpdateResource;
use App\Http\Resources\RoleUpdateNotificationResource;
use App\Http\Resources\RolesServiceResource;
use App\Http\Resources\RolesListResource;
use App\Http\Resources\RolePermissionsUpdateResource;
use App\Http\Resources\RolePermissionsDeleteResource;
use App\Http\Resources\RolePermissionsDeleteByUpdateResource;
use App\Http\Resources\RolePermissionsCreateResource;
use App\Http\Resources\RoleDeleteResource;
use App\Http\Resources\RoleCreateResource;
use App\Http\Requests\RoleUpdateRequest;
use App\Http\Requests\RoleDeleteRequest;
use App\Http\Requests\RoleCreateRequest;
use App\Exports\RolesExport;
use Exception;

class RolesService
{
    protected $rolesRepository;
    protected $rolePermissionsRepository;

    /**
     * create RolesService instance
     * @param  \App\Repositories\Roles\RolesRepositoryInterface  $rolesRepository
     * @param  \App\Repositories\RolePermissions\RolePermissionsRepositoryInterface  $rolePermissionsRepository
     * @return void
     */
    public function __construct(RolesRepositoryInterface $rolesRepository, RolePermissionsRepositoryInterface $rolePermissionsRepository)
    {
        $this->rolesRepository = $rolesRepository;
        $this->rolePermissionsRepository = $rolePermissionsRepository;
    }

    /**
     * get roles data
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getRoles(Request $request)
    {
        $collection = $this->rolesRepository->getRoles();
        $resourceCollection = app()->make(RolesServiceResource::class, ['resource' => $collection]);

        return response()->json($resourceCollection->toArray($request), 200);
    }

    /**
     * get roles data for frontend parts
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getRolesList(Request $request)
    {
        $data = $this->rolesRepository->getRolesList();
        // ????????????????????????????????????????????????????????????????????????????????????
        // ????????????????????????resource??????????????????????????????
        $resource = app()->make(RolesListResource::class, ['resource' => $data]);

        return response()->json($resource->toArray($request), 200);
    }

    /**
     * download role data service
     *
     * @param  \Illuminate\Http\Request;  $request
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function downloadCSV(Request $request)
    {
        $data = $this->rolesRepository->getRoles();

        return Excel::download(new RolesExport($data), 'roles_info_' . Carbon::now()->format('YmdHis') . '.csv');
    }

    /**
     * update role data service
     *
     * @param  \App\Http\Requests\RoleCreateRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function createRole(RoleCreateRequest $request)
    {
        DB::beginTransaction();
        try {
            $resource = app()->make(RoleCreateResource::class, ['resource' => $request])->toArray($request);

            $insertCount = $this->rolesRepository->createRole($resource); // if created => count is 1
            $latestRoles = $this->rolesRepository->getLatestRole();

            // ?????????????????????
            $permissonsResource = app()->make(RolePermissionsCreateResource::class, ['resource' => $latestRoles])->toArray($request);
            $insertRolePermissionsCount = $this->rolePermissionsRepository->createRolePermission($permissonsResource);

            DB::commit();

            // ??????????????????????????????304
            $message = ($insertCount > 0 && $insertRolePermissionsCount > 0) ? 'success' : 'Bad Request';
            $status = ($insertCount > 0 && $insertRolePermissionsCount > 0) ? 201 : 401;

            return response()->json(['message' => $message, 'status' => $status], $status);
        } catch (Exception $e) {
            Log::error(__CLASS__ . '::' . __FUNCTION__ . ' line:' . __LINE__ . ' ' . 'message: ' . json_encode($e->getMessage()));
            DB::rollback();
            abort(500);
        }
    }

    /**
     * update role data service
     *
     * @param  \App\Http\Requests\RoleUpdateRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateRoleData(RoleUpdateRequest $request, int $id)
    {
        DB::beginTransaction();
        try {
            $resource = app()->make(RoleUpdateResource::class, ['resource' => $request])->toArray($request);

            $updatedRowCount = $this->rolesRepository->updateRoleData($resource, $id);

            // ?????????????????????
            $removeResource = app()->make(RolePermissionsDeleteByUpdateResource::class, ['resource' => $request])->toArray($request);
            $this->rolePermissionsRepository->deleteRolePermissionsData($removeResource, $id);

            $updateResource = app()->make(RolePermissionsUpdateResource::class, ['resource' => $request])->toArray($request);
            $updatedRolePermissionsRowCount = $this->rolePermissionsRepository->createRolePermission($updateResource, $id);

            // slack??????
            $attachmentResource = app()->make(RoleUpdateNotificationResource::class, ['resource' => ":tada: Update Role Data \n"])->toArray($request);
            app()->make(RoleSlackNotificationService::class)->send('update role data.', $attachmentResource);

            DB::commit();

            // ?????????????????????????????????304
            $message = ($updatedRowCount > 0 || $updatedRolePermissionsRowCount > 0) ? 'success' : 'not modified';
            $status = ($updatedRowCount > 0 || $updatedRolePermissionsRowCount > 0) ? 200 : 304;

            return response()->json(['message' => $message, 'status' => $status], $status);
        } catch (Exception $e) {
            Log::error(__CLASS__ . '::' . __FUNCTION__ . ' line:' . __LINE__ . ' ' . 'message: ' . json_encode($e->getMessage()));
            DB::rollback();
            abort(500);
        }
    }

    /**
     * delete role data service
     *
     * @param  \App\Http\Requests\RoleDeleteRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteRole(RoleDeleteRequest $request)
    {
        DB::beginTransaction();
        try {
            $roleIds = $request->roles;

            $resource = app()->make(RoleDeleteResource::class, ['resource' => $request])->toArray($request);

            $deleteRowCount = $this->rolesRepository->deleteRoleData($resource, $roleIds);

            // ?????????????????????
            $rolePermissionsResource = app()->make(RolePermissionsDeleteResource::class, ['resource' => $request])->toArray($request);
            $deleteRolePermissionsRowCount = $this->rolePermissionsRepository->deleteRolePermissionsByIds($rolePermissionsResource, $roleIds);

            DB::commit();

            // ?????????????????????????????????304
            $message = ($deleteRowCount > 0 && $deleteRolePermissionsRowCount > 0) ? 'success' : 'not deleted';
            $status = ($deleteRowCount > 0 && $deleteRolePermissionsRowCount > 0) ? 200 : 401;

            return response()->json(['message' => $message, 'status' => $status], $status);
        } catch (Exception $e) {
            Log::error(__CLASS__ . '::' . __FUNCTION__ . ' line:' . __LINE__ . ' ' . 'message: ' . json_encode($e->getMessage()));
            DB::rollback();
            abort(500);
        }
    }
}
