<?php

namespace App\Library;

use Illuminate\Http\Request;
use App\Trait\CheckHeaderTrait;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redis;

class SessionLibrary
{
    use CheckHeaderTrait;

    private const SESSION_KEY_NAME_USER_PREFIX = 'user_';
    private const SESSION_HEADER_TOKEN_NAME = 'Authorization';
    private const SESSION_HEADER_ID_NAME = 'X-Auth-ID';

    // redis上のkey名
    private const SESSION_REDIS_KEY_NAME = 'token';

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
     * @param string $key
     * @param string $value
     * @return bool
     */
    public static function checkSession(string $key, string $value): bool
    {
        return Hash::check($value, Redis::get($key));
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
     * start session.
     *
     * @param \Illuminate\Http\Request $request
     * @return bool
     */
    public function startSession(Request $request): void
    {
        $token = $request->header(self::SESSION_HEADER_TOKEN_NAME);
        $userId = $request->header(self::SESSION_HEADER_ID_NAME);

        $this->setSession(self::SESSION_KEY_NAME_USER_PREFIX . $userId, $token);
    }

    /**
     * set session to redis.
     *
     * @param string $key
     * @param string $value
     * @return bool
     */
    public function setSession(string $key, string $value): void
    {
        $hashedValue = $this->hashSession($value);
        Redis::set($key, json_encode(
            [
                self::SESSION_REDIS_KEY_NAME => $hashedValue
            ]
        ));
    }

    /**
     * hash session data.
     *
     * @param string $value
     * @return string
     */
    private function hashSession(string $value): string
    {
        // hash化
        return Hash::make(
            $value,
            [
                'rounds' => 12,
            ]
        );
    }
}
