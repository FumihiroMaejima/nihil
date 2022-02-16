import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

// global context

import { Layout } from '@/pages/layout/Layout'

// import { useLocationChange } from '@/hooks/auth/useLocationChange'

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
  const locationState = useLocation()

  /**
   * change locatiom path name handler.
   * @return {void}
   */
  const changeLocationHandler = (): void => {
    const handlerExecution = async () => {
      // console.log('router warapper first?: ')
    }
    handlerExecution()
  }

  useLayoutEffect(changeLocationHandler, [locationState])

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
