// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import { Home } from '@/pages/Home'
// sample pages
// import { Graph } from '@/pages/sample/Graph'
import { Sample } from '@/pages/sample/Sample'
import { Picsum } from '@/pages/sample/Picsum'
import { Test1 } from '@/pages/sample/Test1'

export const AppRouter = (): JSX.Element => {
  // process.envがdevelopかの判定
  // 開発時用専用のページを用意したい時に設定する
  const isDevelop = import.meta.env.DEV || false

  const servicePathName = 'admin' || undefined

  return (
    <BrowserRouter basename={servicePathName}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample" element={<Sample />} />
        {isDevelop && <Route path="/picsum" element={<Picsum />} />}
        {isDevelop && <Route path="/test1" element={<Test1 />} />}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
