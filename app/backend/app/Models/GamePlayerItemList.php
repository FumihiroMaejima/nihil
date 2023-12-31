<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GamePlayerItemList extends Model
{
    use HasFactory;
    use SoftDeletes;

    // カラム一覧
    public const ID = 'id';
    public const PLAYER_ID = 'player_id';
    public const CONTENT1 = 'content1';
    public const CONTENT2 = 'content2';
    public const CONTENT3 = 'content3';
    public const CONTENT4 = 'content4';
    public const CONTENT5 = 'content5';
    public const CONTENT6 = 'content6';
    public const CONTENT7 = 'content7';
    public const CONTENT8 = 'content8';
    public const CONTENT9 = 'content9';
    public const CONTENT10 = 'content10';
    public const CONTENT11 = 'content11';
    public const CONTENT12 = 'content12';
    public const CONTENT13 = 'content13';
    public const CONTENT14 = 'content14';
    public const CONTENT15 = 'content15';
    public const CONTENT16 = 'content16';
    public const CONTENT17 = 'content17';
    public const CONTENT18 = 'content18';
    public const CONTENT19 = 'content19';
    public const CONTENT20 = 'content20';
    public const CRREATED_AT = 'created_at';
    public const UPDATED_AT = 'updated_at';
    public const DELETED_AT = 'deleted_at';

    //テーブル名指定
    protected $table = 'game_player_item_list';

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
