import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

// pages
import { Home } from '@/pages/Home'
import { Members } from '@/pages/Members'

// sample pages
// import { Graph } from '@/pages/sample/Graph'
import { Login } from '@/pages/Login'
import { NotFoundPage404 } from '@/pages/errors/404'
import { Sample } from '@/pages/sample/Sample'
import { Picsum } from '@/pages/sample/Picsum'
import { Test1 } from '@/pages/sample/Test1'

import { AuthGlobalHeader } from '@/components/_global/AuthGlobalHeader'
import { GlobalHeader } from '@/components/_global/GlobalHeader'

import {
  GlobalRouterContextWrapper,
  AppRouteType,
} from '@/components/_global/context/GlobalRouterContextWrapper'
import { GlobalNavigationGuardProviderContainer } from '@/components/container/GlobalNavigationGuardProviderContainer'

const adminRoutes: AppRouteType[] = [
  {
    title: 'ホーム | 管理システム',
    shortTitle: 'ホーム',
    path: '/',
    element: <Home />,
    requiredAuth: true,
    permissions: ['master', 'administrator'],
  },
  {
    title: 'メンバー | 管理システム',
    shortTitle: 'メンバー',
    path: '/members',
    element: <Members />,
    requiredAuth: true,
    permissions: ['master', 'administrator'],
  },
  {
    title: 'サンプル | 管理システム',
    shortTitle: 'サンプル',
    path: '/sample',
    element: <Sample />,
    requiredAuth: true,
    permissions: ['master', 'administrator'],
  },
]

const normalRoutes: AppRouteType[] = [
  {
    title: 'ログイン | 管理システム',
    shortTitle: 'ログイン',
    path: '/login',
    element: <Login />,
    requiredAuth: false,
  },
  {
    title: 'NotFound | 管理システム',
    shortTitle: 'NotFound',
    path: '*',
    element: <NotFoundPage404 />,
    requiredAuth: false,
  },
]

// 開発時専用ページ
const devlopOnlyRoutes: AppRouteType[] = [
  {
    title: 'picsumページ | 開発用テストページ',
    shortTitle: 'picsum',
    path: '/picsum',
    element: <Picsum />,
    requiredAuth: false,
  },
  {
    title: 'test1ページ | 開発用テストページ',
    shortTitle: 'test1',
    path: '/test1',
    element: <Test1 />,
    requiredAuth: false,
  },
]

export const routes = adminRoutes.concat(normalRoutes)

export const AppRouter: React.VFC = () => {
  // process.envがdevelopかの判定
  // 開発時用専用のページを用意したい時に設定する
  const isDevelop = import.meta.env.DEV || false

  const servicePathName = 'admin' || undefined

  const [isAuthenticated, updateIsAuth] = useState(false)

  return (
    <BrowserRouter basename={servicePathName}>
      {isAuthenticated ? (
        <AuthGlobalHeader
          routes={routes.filter(
            (route) => !(route.path === '/login' || route.path === '*')
          )}
        />
      ) : (
        <GlobalHeader />
      )}
      <GlobalNavigationGuardProviderContainer>
        <GlobalRouterContextWrapper
          routes={isDevelop ? routes.concat(devlopOnlyRoutes) : routes}
          updateIsAuthentecatedEventHandler={updateIsAuth}
        />
      </GlobalNavigationGuardProviderContainer>
    </BrowserRouter>
  )
}

export default AppRouter
