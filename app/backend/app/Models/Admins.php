<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\AdminsRoles;

class Admins extends Authenticatable implements JWTSubject
{
    use HasFactory;
    use Notifiable;
    use SoftDeletes;
    protected $carbon;
    protected $now;

    // カラム一覧
    public const ID = 'id';
    public const NAME = 'name';
    public const EMAIL = 'email';
    public const EMAIL_VERIFIED_AT = 'email_verified_at';
    public const REMEMBER_TOKEN = 'remember_token';
    public const CRREATED_AT = 'created_at';
    public const UPDATED_AT = 'updated_at';
    public const DELETED_AT = 'deleted_at';

    //テーブル名指定
    protected $table = 'admins';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * used in initializeSoftDeletes()
     *
     * @var array
     */
    protected $dates = ['deleted_at'];


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'updated_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [];

    public function __construct()
    {
        $this->carbon = new Carbon();
        $this->now = $this->carbon->now()->timestamp;
    }

    public function getUserId()
    {
        return  $this->id;
    }

    public function getUserName()
    {
        return $this->name;
    }

    public function getUserEmail()
    {
        return $this->email;
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.(JWTSubject)
     *
     * @a return mixed
     */
    public function getJWTIdentifier()
    {
        // primary keyを取得
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.(JWTSubject)
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * Define a one-to-one relationship.
     * 各管理者に関連しているロールの取得
     *
     * @return array
     */
    public function role()
    {
        return $this->hasOne(AdminsRoles::class, 'admin_id');
    }

    /**
     * Define a one-to-many relationship.
     * 各管理者に関連しているロールの取得
     *
     * @return array
     */
    public function hadRoles()
    {
        return $this->hasMany(AdminsRoles::class, 'admin_id');
    }

    /**
     * Define a many-to-many relationship.
     * 管理者に設定されているロールの取得
     * 中間テーブル向けの設定
     *
     * @return Roles|null
     */
    public function roles()
    {
        return $this->belongsToMany(Roles::class, (new AdminsRoles())->getTable(), 'admin_id', 'role_id');
    }

    /**
     * Define an inverse one-to-one or many relationship.
     *
     * @return array
     */
    public function belongs()
    {
        return $this->belongsTo(AdminsRoles::class, 'admin_id');
    }
}
