/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext } from 'react'
import {
  useNavigationGuard,
  UseNavigationGuardType,
} from '@/hooks/global/useNavigationGuard'

const defaultContextValue: UseNavigationGuardType = {
  isNavigating: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateNavigating: (value: boolean) => {},
}

export const GlobalNavigationContext = createContext(defaultContextValue)

export const GlobalNavigationGuardProviderContainer: React.FC = (props) => {
  const { isNavigating, updateNavigating } = useNavigationGuard()
  return (
    <GlobalNavigationContext.Provider
      value={{ isNavigating, updateNavigating }}
    >
      {props.children}
    </GlobalNavigationContext.Provider>
  )
}

export default GlobalNavigationGuardProviderContainer
