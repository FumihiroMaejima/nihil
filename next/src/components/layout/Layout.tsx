import React, { useContext } from 'react'
/* import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
  NextComponentType,
  NextPageContext,
} from 'next' */
// import { useLocation, Outlet } from 'react-router-dom'
// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import type { AppProps, AppContext } from 'next/app'
// import { useRouter } from 'next/router'
// import axios from 'axios'

import { AuthGlobalHeader } from '@/components/_global/AuthGlobalHeader'
import { GlobalHeader } from '@/components/_global/GlobalHeader'

// global context
import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'
// import { GlobalLinerLoadingContext } from '@/components/container/GlobalLinerLoadingProviderContainer'

import { routes } from '@/AppRouter'

type Props = {
  // routes?: AppRouteType[]
  // updateIsAuthentecatedEventHandler?: (value: boolean) => void
  children?: JSX.Element
}

export type GlobalNavigationGuardHandlerType = {
  navigationGuardHandler: () => Promise<void>
}

/* export async function getServerSideProps() {
  //  const res = await fetch(`https://google.com`)
  const res = await axios.get(`https://google.com`)
  const posts = await res.headers
  // console.log(posts)
  console.log('layout component: ' + JSON.stringify(posts, null, 2))

  // TODO やはりgetServerSideProps()内ではuseRouterは使えない。
  // const router = useRouter()
  // router.push('/login')
  return { props: { posts } }
} */

/* export async function getServerSideProps() {
  const res = await fetch(`https://gogle.com`);
  const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
} */

export const Layout: React.VFC<Props> = ({
  // routes = [],
  // updateIsAuthentecatedEventHandler = undefined,
  children = undefined,
}) => {
  console.log('layout component: ' + JSON.stringify(null, null, 2))

  // const { updateGlobalLinerLoading } = useContext(GlobalLinerLoadingContext)
  const { getAuthId } = useContext(AuthAppContext)

  // return <>{children}</>
  return (
    <>
      {getAuthId() !== null ? (
        <AuthGlobalHeader
          routes={routes.filter(
            (route) => !(route.path === '/login' || route.path === '*')
          )}
        />
      ) : (
        <GlobalHeader />
      )}
      {children}
    </>
  )
}

export default Layout
