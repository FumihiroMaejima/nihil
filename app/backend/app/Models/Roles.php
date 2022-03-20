<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Admins;
use App\Models\RolePermissions;

class Roles extends Model
{
    use HasFactory;
    use SoftDeletes;

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
     *
     * @return array
     */
    public function permissions()
    {
        return $this->hasMany(RolePermissions::class, 'role_id');
    }

    /**
     * Define an inverse one-to-one or many relationship.
     *
     * @return array
     */
    public function belongs()
    {
        return $this->belongsTo(RolePermissions::class, 'role_id');
    }

}
