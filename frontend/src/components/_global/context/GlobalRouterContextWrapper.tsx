import React, { useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// global context
import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'
import { GlobalLinerLoadingContext } from '@/components/container/GlobalLinerLoadingProviderContainer'

export type AppRouteType = {
  path?: string
  element?: JSX.Element
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
  const { updateGlobalLinerLoading } = useContext(GlobalLinerLoadingContext)
  const { checkAuthenticated, getAuthAuthority } = useContext(AuthAppContext)

  const locationState = useLocation()
  const navigate = useNavigate()

  /**
   * redirect login page.
   * @return {void}
   */
  const redirectLoginPage = () => {
    if (updateIsAuthentecatedEventHandler) {
      updateIsAuthentecatedEventHandler(false)
    }
    navigate('/login', { replace: true })
  }

  /**
   * change locatiom path name handler.
   * @return {void}
   */
  const changeLocationPathNameHandler = (): void => {
    const currentRoute = routes.find(
      (route) => route.path === locationState.pathname
    )

    // 認証が必要なページ
    if (currentRoute && currentRoute.requiredAuth) {
      updateGlobalLinerLoading(true)
      // 認証情報のチェック処理
      checkAuthenticated().then((result) => {
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
      })
    }
  }

  useEffect(changeLocationPathNameHandler, [locationState.pathname])

  return (
    <div className="global-router-context-wrapper" style={{ display: 'none' }}>
      global-router-context-wrapper
    </div>
  )
}

export default GlobalRouterContextWrapper
