<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Admins;
use App\Models\AdminsRoles;
use App\Models\RolePermissions;

class Roles extends Model
{
    use HasFactory;
    use SoftDeletes;

    // カラム一覧
    public const ID = 'id';
    public const NAME = 'name';
    public const CODE = 'code';
    public const DETAIL = 'detail';
    public const CRREATED_AT = 'created_at';
    public const UPDATED_AT = 'updated_at';
    public const DELETED_AT = 'deleted_at';

    //テーブル名指定
    protected $table = 'roles';

    // カラムの自動更新をEloquentに許可
    public $timestamps = true;

    // ソフトデリートの有効化(日付へキャストする属性)
    protected $dates = ['deleted_at'];

    // 更新可能なカラムリスト
    protected $fillable = [
        'name',
        'code',
        'updated_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];


    /**
     * Define a one-to-many relationship.
     * ロールが設定されている管理者の取得
     *
     * @return array
     */
    public function hasAdmins()
    {
        return $this->hasMany(AdminsRoles::class, 'role_id');
    }

    /**
     * Define a one-to-many relationship.
     * ロールにて設定されている権限の取得
     *
     * @return array
     */
    public function hasPermissions()
    {
        return $this->hasMany(RolePermissions::class, 'role_id');
    }

    /**
     * Define a many-to-many relationship.
     * 管理者に設定されているロールの取得
     * 中間テーブル向けの設定
     *
     * @return Roles|null
     */
    public function admins()
    {
        return $this->belongsToMany(Admins::class, (new AdminsRoles())->getTable(), 'role_id', 'admin_id');
    }

    /**
     * Define a many-to-many relationship.
     * 設定されている権限の取得
     * 中間テーブル向けの設定
     *
     * @return Roles|null
     */
    public function permissions()
    {
        return $this->belongsToMany(Permissions::class, (new RolePermissions())->getTable(), 'role_id', 'permission_id');
    }
}
