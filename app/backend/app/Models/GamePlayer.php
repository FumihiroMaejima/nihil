<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;

class GamePlayer extends Authenticatable implements JWTSubject
{
    use HasFactory;
    use Notifiable;
    use SoftDeletes;
    protected $carbon;
    protected $now;

    // カラム一覧
    public const ID = 'id';
    public const NAME = 'name';
    public const LEVEL = 'level';
    public const HP = 'hp';
    public const MP = 'mp';
    public const OFFENCE = 'offence';
    public const DEFENSE = 'defense';
    public const SPEED = 'speed';
    public const MAGIC = 'magic';
    public const OFFENCE_EQUIPMENT_ID = 'offence_equipment_id';
    public const DEFENSE_EQUIPMENT_ID = 'defense_equipment_id';
    public const ABILITY1_ID = 'ability1_id';
    public const ABILITY2_ID = 'ability2_id';
    public const ABILITY3_ID = 'ability3_id';
    public const TITLE_ID = 'title_id';
    public const ITEM = 'item';
    public const SPECIAL_ITEM_FLG1 = 'special_item_flg1';
    public const SPECIAL_ITEM_FLG2 = 'special_item_flg2';
    public const SPECIAL_ITEM_FLG3 = 'special_item_flg3';
    public const REVIVIAL_PASSWORD = 'revival_password';
    public const SAVE_FLG = 'save_flg';
    public const UNSAVED_COUNT = 'unsaved_count';
    public const LOST_FLG = 'lost_flg';
    public const CRREATED_AT = 'created_at';
    public const UPDATED_AT = 'updated_at';
    public const DELETED_AT = 'deleted_at';

    //テーブル名指定
    protected $table = 'game_player';

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
        'name'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [];

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
}
