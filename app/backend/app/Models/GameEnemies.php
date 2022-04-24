<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GameEnemies extends Model
{
    use HasFactory;
    use SoftDeletes;

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
    public const ITEM = 'item';
    public const EVENT_ONLY_FLG = 'event_only_flg';
    public const ENCOUNT_AREA_ID = 'encount_area_id';
    public const IMAGE_NAME = 'image_name';
    public const IMAGE_URL = 'image_url';
    public const CRREATED_AT = 'created_at';
    public const UPDATED_AT = 'updated_at';
    public const DELETED_AT = 'deleted_at';

    //テーブル名指定
    protected $table = 'game_enemies';

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

    public function __construct()
    {
    }
}
