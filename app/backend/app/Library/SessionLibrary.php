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

    // ヘッダーデータのkey名
    private const HEADER_ARRAY_KEY_NAME_ID = 'userId';
    private const HEADER_ARRAY_KEY_NAME_TOKEN = 'token';

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
        $headers = $this->getHeaderData($request);

        $this->setSession(
            self::SESSION_KEY_NAME_USER_PREFIX . $headers[self::HEADER_ARRAY_KEY_NAME_ID],
            $headers[self::HEADER_ARRAY_KEY_NAME_TOKEN]
        );
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
                self::HEADER_ARRAY_KEY_NAME_TOKEN => $hashedValue
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

    /**
     * get header data.
     *
     * @param \Illuminate\Http\Request $request
     * @return bool
     */
    private function getHeaderData(Request $request): array
    {
        return [
            self::HEADER_ARRAY_KEY_NAME_ID    => $request->header(self::SESSION_HEADER_ID_NAME),
            self::HEADER_ARRAY_KEY_NAME_TOKEN => $request->header(self::SESSION_HEADER_TOKEN_NAME),
        ];
    }
}
