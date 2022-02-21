import { useState } from 'react'

import { AuthGlobalHeader } from '@/components/_global/AuthGlobalHeader'
import { GlobalHeader } from '@/components/_global/GlobalHeader'

export type AppRouteType = {
  title: string
  shortTitle: string
  path: string
  element?: JSX.Element
  requiredAuth?: boolean
  permissions?: string[]
}

const adminRoutes: AppRouteType[] = [
  {
    title: 'ホーム | 管理システム',
    shortTitle: 'ホーム',
    path: '/',
    // element: <Home />,
    requiredAuth: true,
    permissions: ['master', 'administrator'],
  },
  /* {
    title: 'メンバー | 管理システム',
    shortTitle: 'メンバー',
    path: '/members',
    element: <Members />,
    requiredAuth: true,
    permissions: ['master', 'administrator'],
  }, */
  {
    title: 'サンプル | 管理システム',
    shortTitle: 'サンプル',
    path: '/sample',
    // element: <Sample />,
    requiredAuth: true,
    permissions: ['master', 'administrator'],
  },
]

const normalRoutes: AppRouteType[] = [
  {
    title: 'ログイン | 管理システム',
    shortTitle: 'ログイン',
    path: '/login',
    // element: <Login />,
    requiredAuth: false,
  },
]

// 開発時専用ページ
// const devlopOnlyRoutes: AppRouteType[] = []

export const routes: AppRouteType[] = adminRoutes.concat(normalRoutes)

export const AppRouter: React.VFC = () => {
  // const servicePathName = 'admin' || undefined

  const [isAuthenticated, updateIsAuth] = useState(false)

  return (
    <>
      {isAuthenticated ? (
        <AuthGlobalHeader
          routes={routes.filter(
            (route) => !(route.path === '/login' || route.path === '*')
          )}
        />
      ) : (
        <GlobalHeader />
      )}
    </>
  )
}

export default AppRouter
