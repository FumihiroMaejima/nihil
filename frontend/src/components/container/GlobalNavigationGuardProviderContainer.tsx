/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext } from 'react'
import {
  useNavigationGuard,
  UseNavigationGuardType,
} from '@/hooks/global/useNavigationGuard'

const defaultContextValue: UseNavigationGuardType = {
  isGlobalNavigating: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateGlobalNavigating: (value: boolean) => {},
}

export const GlobalNavigationContext = createContext(defaultContextValue)

export const GlobalNavigationGuardProviderContainer: React.FC = (props) => {
  const { isGlobalNavigating, updateGlobalNavigating } = useNavigationGuard()
  return (
    <GlobalNavigationContext.Provider
      value={{ isGlobalNavigating, updateGlobalNavigating }}
    >
      {props.children}
    </GlobalNavigationContext.Provider>
  )
}

export default GlobalNavigationGuardProviderContainer
