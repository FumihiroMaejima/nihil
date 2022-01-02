import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// pages
import { Home } from '@/pages/Home'

export const AppRouter = (): JSX.Element => {
  // process.envがdevelopかの判定
  // 開発時用専用のページを用意したい時に設定する
  const isDevelop = import.meta.env.DEV || false

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
