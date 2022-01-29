// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import { Home } from '@/pages/Home'
// sample pages
// import { Graph } from '@/pages/sample/Graph'
import { Sample } from '@/pages/sample/Sample'
import { Picsum } from '@/pages/sample/Picsum'
import { Test1 } from '@/pages/sample/Test1'

type AppRouteType = {
  path: string
  element: JSX.Element
}

export const AppRouter = (): JSX.Element => {
  // process.envがdevelopかの判定
  // 開発時用専用のページを用意したい時に設定する
  const isDevelop = import.meta.env.DEV || false

  const servicePathName = 'admin' || undefined

  const routes: AppRouteType[] = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/sample',
      element: <Sample />,
    },
  ]

  // 開発時専用ページ
  const devlopOnlyRoutes: AppRouteType[] = [
    {
      path: '/picsum',
      element: <Picsum />,
    },
    {
      path: '/test1',
      element: <Test1 />,
    },
  ]

  return (
    <BrowserRouter basename={servicePathName}>
      <Routes>
        {!isDevelop &&
          routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        {isDevelop &&
          routes
            .concat(devlopOnlyRoutes)
            .map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))}
        {/* <Route path="/" element={<Home />} />
        <Route path="/sample" element={<Sample />} />
        {isDevelop && <Route path="/picsum" element={<Picsum />} />}
        {isDevelop && <Route path="/test1" element={<Test1 />} />} */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
