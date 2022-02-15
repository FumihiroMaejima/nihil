import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: React.VFC = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default Layout
