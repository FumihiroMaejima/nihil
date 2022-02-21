import React from 'react'

type Props = {
  routes?: []
  updateIsAuthentecatedEventHandler?: (value: boolean) => void
}

export const GlobalRouterContextWrapper: React.VFC<Props> = ({
  routes = [],
  updateIsAuthentecatedEventHandler = undefined,
}) => {
  return (
    <>
      {
        {
          /* <Routes>
          <Route
            element={
              <NavigationGuardLayout
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
        </Routes> */
        }
      }
    </>
  )
}

export default GlobalRouterContextWrapper
