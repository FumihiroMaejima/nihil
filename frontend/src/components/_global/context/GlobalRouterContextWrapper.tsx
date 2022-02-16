import React, { useState, useContext, useEffect, useLayoutEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

// global context
// import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'
// import { GlobalLinerLoadingContext } from '@/components/container/GlobalLinerLoadingProviderContainer'
// import { GlobalNavigationContext } from '@/components/container/GlobalNavigationGuardProviderContainer'

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
  // const [isShowPage, updateShowPageFlag] = useState<boolean>(false)
  // const { updateGlobalLinerLoading } = useContext(GlobalLinerLoadingContext)
  // const { checkAuthenticated, getAuthAuthority } = useContext(AuthAppContext)
  // const { updateGlobalNavigating } = useContext(GlobalNavigationContext)

  const locationState = useLocation()
  // const navigate = useNavigate()

  /**
   * redirect login page.
   * @return {void}
   */
  const redirectLoginPage = () => {
    if (updateIsAuthentecatedEventHandler) {
      updateIsAuthentecatedEventHandler(false)
    }
    // navigate('/login', { replace: true })
    // データの初期化も兼ねてグローバルなLocationクラスを利用する
    location.assign('/admin/login')
  }

  /**
   * change locatiom path name handler.
   * @return {void}
   */
  const changeLocationHandler = (): void => {
    // updateShowPageFlag(false)
    // console.log('locationState: ' + JSON.stringify(locationState, null, 2))

    const handlerExecution = async () => {
      console.log('router warapper first?: ')
      /* const currentRoute = routes.find(
        (route) => route.path === locationState.pathname
      ) */

      // 認証が必要なページ
      /* if (currentRoute && currentRoute.requiredAuth) {
        updateGlobalLinerLoading(true)
        // 認証情報のチェック処理
        const result = await checkAuthenticated()
        updateGlobalLinerLoading(false)
        if (!result) {
          redirectLoginPage()
        } else {
          if (currentRoute.permissions) {
            // 権限情報のチェック
            if (
              !getAuthAuthority().some((role) =>
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                currentRoute.permissions!.includes(role)
              )
            ) {
              // 認可されていないユーザーの場合
              redirectLoginPage()
            } else {
              // 認証・認可を満たすユーザー
              if (updateIsAuthentecatedEventHandler) {
                updateIsAuthentecatedEventHandler(true)
              }
            }
          } else {
            // 認証付きページかつ認可情報が設定されていない場合
            redirectLoginPage()
          }
        }
      } */
      // updateShowPageFlag(true)
    }
    // updateShowPageFlag(false)
    handlerExecution()
    // updateShowPageFlag(true)
  }

  useLayoutEffect(changeLocationHandler, [locationState])

  return (
    /* <div className="global-router-context-wrapper" style={{ display: 'none' }}>
      global-router-context-wrapper
    </div> */
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
      {/* {isShowPage && (
        <Routes>
          {routes.map(
            (route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            )
          )}
        </Routes>
      )} */}
      {/* <Routes>
        {routes.map(
          (route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          )
        )}
      </Routes> */}
    </>
  )
}

export default GlobalRouterContextWrapper
