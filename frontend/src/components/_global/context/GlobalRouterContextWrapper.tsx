import React, { useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
// import { PartsSimpleToast } from '@/components/parts/toast/PartsSimpleToast'
// import { PartsCircleLoading } from '@/components/parts/PartsCircleLoading'

// global context
// import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'
// import { ToastContext } from '@/components/container/ToastProviderContainer'
import { GlobalLoadingContext } from '@/components/container/GlobalLoadingProviderContainer'
import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'

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
  // const { state, updateToastState } = useContext(ToastContext)
  const { checkAuthenticated, getAuthAuthority } = useContext(AuthAppContext)
  /* console.log(
    'global wrapper component.: ' + JSON.stringify(updateToastState, null, 2)
  ) */

  const locationState = useLocation()
  const navigate = useNavigate()

  // console.log('global-router-context-wrapper link: ' + JSON.stringify(link.pathname, null, 2))
  // console.log('global-router-context-wrapper navidate: ' + JSON.stringify(navigate, null, 2))

  const redirectLoginPage = () => {
    navigate('/login', { replace: true })
  }

  useEffect(() => {
    const currentRoute = routes.find(
      (route) => route.path === locationState.pathname
    )

    // console.log('currentRoute: ' + JSON.stringify(currentRoute, null, 2))

    // 認証が必要なページ
    if (currentRoute && currentRoute.requiredAuth) {
      console.log(
        'current route is required authenticated: ' + locationState.pathname
      )

      updateGlobalLoading(true)
      // 認証情報のチェック処理
      checkAuthenticated().then((result) => {
        console.log(
          'checkAuthenticated result: ' + JSON.stringify(result, null, 2)
        )

        updateGlobalLoading(false)
        if (!result) {
          // redirect login page
          // navigate('/login', { replace: true })
          redirectLoginPage()
        } else {
          if (currentRoute.permissions) {
            console.log(
              'permissions: ' +
                JSON.stringify(currentRoute.permissions, null, 2)
            )
            console.log(
              'getAuthAuthority(): ' +
                JSON.stringify(getAuthAuthority().length, null, 2)
            )
            // check page authority.
            if (
              !getAuthAuthority().some((role) =>
                currentRoute.permissions.includes(role)
              )
            ) {
              // navigate('/login', { replace: true })
              // redirectLoginPage()
            }
          } else {
            // no authority set.
            // navigate('/login', { replace: true })
            // redirectLoginPage()
          }
        }

        // updateGlobalLoading(false)
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
