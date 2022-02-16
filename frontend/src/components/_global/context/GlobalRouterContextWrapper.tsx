import React from 'react'
import { Route, Routes } from 'react-router-dom'

// page layout component
import { Layout } from '@/pages/layout/Layout'

export type AppRouteType = {
  title: string
  shortTitle: string
  path: string
  element: JSX.Element
  requiredAuth?: boolean
  permissions?: string[]
}

type Props = {
  routes?: AppRouteType[]
  updateIsAuthentecatedEventHandler?: (value: boolean) => void
}

export const GlobalRouterContextWrapper: React.VFC<Props> = ({
  routes = [],
  updateIsAuthentecatedEventHandler = undefined,
}) => {
  return (
    <>
      {
        <Routes>
          <Route
            element={
              <Layout
                routes={routes}
                updateIsAuthentecatedEventHandler={
                  updateIsAuthentecatedEventHandler
                }
              />
            }
          >
            {routes.map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      }
    </>
  )
}

export default GlobalRouterContextWrapper
