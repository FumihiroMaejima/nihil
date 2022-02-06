import React, { useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// global context
import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'
import { GlobalLoadingContext } from '@/components/container/GlobalLoadingProviderContainer'

export type AppRouteType = {
  path?: string
  element?: JSX.Element
  requiredAuth?: boolean
  permissions?: string[]
}

type Props = {
  routes?: AppRouteType[]
}

export const GlobalRouterContextWrapper: React.VFC<Props> = ({
  routes = [],
}) => {
  const { updateGlobalLoading } = useContext(GlobalLoadingContext)
  const { checkAuthenticated, getAuthAuthority } = useContext(AuthAppContext)

  const locationState = useLocation()
  const navigate = useNavigate()

  /**
   * redirect login page.
   * @return {void}
   */
  const redirectLoginPage = () => {
    navigate('/login', { replace: true })
  }

  useEffect(() => {
    const currentRoute = routes.find(
      (route) => route.path === locationState.pathname
    )

    // 認証が必要なページ
    if (currentRoute && currentRoute.requiredAuth) {
      updateGlobalLoading(true)
      // 認証情報のチェック処理
      checkAuthenticated().then((result) => {
        updateGlobalLoading(false)
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
            }
          } else {
            // 認証付きページかつ認可情報が設定されていない場合
            redirectLoginPage()
          }
        }
      })
    }
  }, [locationState.pathname])

  return (
    <div className="global-router-context-wrapper" style={{ display: 'none' }}>
      global-router-context-wrapper
    </div>
  )
}

export default GlobalRouterContextWrapper
