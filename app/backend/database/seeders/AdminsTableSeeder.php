<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;

class AdminsTableSeeder extends Seeder
{
    private const TABLE_NAME = 'admins';
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
            'name'       => '',
            'email'      => '',
            'password'   => bcrypt(Config::get('myapp.seeder.password.testadmin')),
            'created_at' => '2022-01-04 00:00:00',
            'updated_at' => '2022-01-04 00:00:00'
        ];

        // insert用データ
        $data = [];

        // 1~$this->countの数字の配列でforを回す
        foreach (range(1, $this->count) as $i) {
            $row = $template;

            $row['name']  = 'admin' . (string)($i);
            $row['email'] = 'testadmin' . (string)($i) . '@example.com';

            $data[] = $row;
        }

        // テーブルへの格納
        DB::table(self::TABLE_NAME)->insert($data);
    }
}
