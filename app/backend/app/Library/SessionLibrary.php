<?php

namespace App\Library;

use Illuminate\Http\Request;
use App\Trait\CheckHeaderTrait;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redis;

class SessionLibrary
{
    use CheckHeaderTrait;

    /**
     * Create a new MembersController instance.
     *
     * @return void
     */
    public function __construct()
    {}

    /**
     * check session has session key.
     *
     * @param \Illuminate\Http\Request $request
     * @return bool
     */
    public static function checkSession(Request $request): bool
    {
        $isSame = Hash::check('test session value', Redis::get('test_sesion'));
        $session = Redis::get('test_sesion');

        return true;
    }

    /**
     * check session has session key.
     *
     * @param string $request
     * @return bool
     */
    public static function hasSession(string $key): bool
    {
        $session = Redis::get($key);

        return $session ? true : false;
    }

    /**
     * get session value.
     *
     * @param string $request
     * @return bool
     */
    public static function getSession(string $key): string
    {
        $session = Redis::get($key);

        return $session ?? '';
    }

    /**
     * set session to redis.
     *
     * @param \Illuminate\Http\Request $request
     * @return bool
     */
    public static function setSession($key, $value): void
    {
        // hash化
        $hasedValue = Hash::make($value, [
            'rounds' => 12,
        ]);
        // Redis::set($key, 'test session value');
        Redis::set($key, $hasedValue);
    }
}
