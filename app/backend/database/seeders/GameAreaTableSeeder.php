<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;

class GameAreaTableSeeder extends Seeder
{
    private const TABLE_NAME = 'game_area';
    private const SEEDER_DATA_LENGTH = 12;
    private const SEEDER_DEVELOP_DATA_LENGTH = 30;
    private int $count = 12;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $template = [
            'name'       => '',
            'message'    => 'this area message' . Str::random(40),
            'image_name' => Str::random(20),
            'image_url'  => 'https://' . Str::random(20),
            'created_at' => '2021-01-14 00:00:00',
            'updated_at' => '2021-01-14 00:00:00'
        ];

        // insert用データ
        $data = [];

        // データ数
        $this->count = $this->getSeederDataLengthByEnv(Config::get('app.env'));

        // 1~$this->countの数字の配列でforを回す
        foreach (range(1, $this->count) as $i) {
            $row = $template;

            $row['name']       = 'area' . (string)($i);
            $row['message']    = $row['message'] . '_' . (string)($i);
            $row['image_name'] = $row['image_name'] . '_' . (string)($i);
            $row['image_url']  = $row['image_url'] . '_' . (string)($i);

            $data[] = $row;
        }

        // テーブルへの格納
        DB::table(self::TABLE_NAME)->insert($data);
    }

    /**
     * get data length by env.
     * @param string $envName
     *
     * @return int
     */
    private function getSeederDataLengthByEnv(string $envName): int
    {
        if ($envName === 'production') {
            return self::SEEDER_DATA_LENGTH;
        } elseif ($envName === 'testing') {
            // testの時
            return self::SEEDER_DATA_LENGTH;
        } else {
            // localやstaging
            return self::SEEDER_DEVELOP_DATA_LENGTH;
            // return self::SEEDER_DATA_LENGTH;
        }
    }
}
