<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;

class AdminsLogTableSeeder extends Seeder
{
    private const TABLE_NAME = 'admins_log';
    private const SEEDER_DATA_LENGTH = 5;
    private int $count = 5;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $template = [
            'admin_id'    => 1,
            'function'    => 'GET',
            'status'      => '200',
            'action_time' => '2021-01-14 00:00:00',
            'created_at'  => '2021-01-14 00:00:00',
            'updated_at'  => '2021-01-14 00:00:00'
        ];

        // insert用データ
        $data = [];

        // 1~$this->countの数字の配列でforを回す
        foreach (range(1, $this->count) as $i) {
            $row = $template;

            $row['function']    = ($i % 2 === 0) ? 'GET' : 'POST';
            $row['status']      = 'admins log' . ($i % 2 === 0) ? '200' : '404';
            $row['action_time'] = '2021-01-15 00:00:00';

            $data[] = $row;
        }

        // テーブルへの格納
        DB::table(self::TABLE_NAME)->insert($data);
    }
}
