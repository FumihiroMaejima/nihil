<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;

class GameEventTableSeeder extends Seeder
{
    private const TABLE_NAME = 'game_event';
    private const SEEDER_DATA_LENGTH = 6;
    private int $count = 6;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $template = [
            'name'          => '',
            'area_id'       => 1,
            'character_id1' => 1,
            'character_id2' => 2,
            'created_at'    => '2021-01-14 00:00:00',
            'updated_at'    => '2021-01-14 00:00:00'
        ];

        // insert用データ
        $data = [];

        // 1~$this->countの数字の配列でforを回す
        foreach (range(1, $this->count) as $i) {
            $row = $template;

            $row['name']          = 'event' . (string)($i);
            $row['character_id1'] = ($i + 1) * 1;
            $row['character_id1'] = ($i + 2) * 1;

            $data[] = $row;
        }

        // テーブルへの格納
        DB::table(self::TABLE_NAME)->insert($data);
    }
}
