import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import { Home } from '@/pages/Home'

export const AppRouter = (): JSX.Element => {
  // process.envがdevelopかの判定
  // 開発時用専用のページを用意したい時に設定する
  const isDevelop = import.meta.env.DEV || false

  const servicePathName = 'admin' || undefined

  return (
    <BrowserRouter basename={servicePathName}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
