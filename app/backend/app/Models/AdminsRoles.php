<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Admins;
use App\Models\Permissions;
use App\Models\RolePermissions;
use App\Models\Roles;

class AdminsRoles extends Model
{
    use HasFactory;
    use SoftDeletes;

    //テーブル名指定
    protected $table = 'admins_roles';

    // カラムの自動更新をEloquentに許可
    public $timestamps = true;

    // ソフトデリートの有効化(日付へキャストする属性)
    protected $dates = ['deleted_at'];

    // 更新可能なカラムリスト
    protected $fillable = [
        'updated_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * Define an inverse one-to-one or many relationship.
     * 各ロールが設定されている管理者の取得
     *
     * @return Admins|null
     */
    public function admin()
    {
        return $this->belongsTo(Admins::class, 'admin_id');
    }
}
