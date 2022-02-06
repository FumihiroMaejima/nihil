// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import { Home } from '@/pages/Home'
// sample pages
// import { Graph } from '@/pages/sample/Graph'
import { Login } from '@/pages/Login'
import { NotFoundPage404 } from '@/pages/errors/404'
import { Sample } from '@/pages/sample/Sample'
import { Picsum } from '@/pages/sample/Picsum'
import { Test1 } from '@/pages/sample/Test1'

import {
  GlobalRouterContextWrapper,
  AppRouteType,
} from '@/components/_global/context/GlobalRouterContextWrapper'
// import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'
// import { ToastContext } from '@/components/container/ToastProviderContainer'
// import { GlobalLoadingContext } from '@/components/container/GlobalLoadingProviderContainer'

const routes: AppRouteType[] = [
  {
    path: '/',
    element: <Home />,
    requiredAuth: false,
    // permissions: ['master'],
  },
  {
    path: '/sample',
    element: <Sample />,
    requiredAuth: true,
    permissions: ['master'],
  },
  {
    path: '/login',
    element: <Login />,
    requiredAuth: false,
  },
  {
    path: '*',
    element: <NotFoundPage404 />,
    requiredAuth: false,
  },
]

// 開発時専用ページ
const devlopOnlyRoutes: AppRouteType[] = [
  {
    path: '/picsum',
    element: <Picsum />,
    requiredAuth: false,
  },
  {
    path: '/test1',
    element: <Test1 />,
    requiredAuth: false,
  },
]

export const AppRouter = (): JSX.Element => {
  // process.envがdevelopかの判定
  // 開発時用専用のページを用意したい時に設定する
  const isDevelop = import.meta.env.DEV || false

  const servicePathName = 'admin' || undefined

  return (
    <BrowserRouter basename={servicePathName}>
      <GlobalRouterContextWrapper routes={routes} />
      <Routes>
        {/* {!isDevelop &&
          routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))} */}
        {isDevelop &&
          routes
            .concat(devlopOnlyRoutes)
            .map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
