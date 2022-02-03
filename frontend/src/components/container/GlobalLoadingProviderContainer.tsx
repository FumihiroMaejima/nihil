/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext } from 'react'
import {
  useGlobalLoading,
  UseGlobalLoadingType,
} from '@/hooks/global/useGlobalLoading'

const defaultContextValue: UseGlobalLoadingType = {
  state: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateGlobalLoading: (value: boolean) => {},
}

export const GlobalLoadingContext = createContext(defaultContextValue)

export const GlobalLoadingProviderContainer: React.FC = (props) => {
  const { state, updateGlobalLoading } = useGlobalLoading()
  return (
    <GlobalLoadingContext.Provider value={{ state, updateGlobalLoading }}>
      {props.children}
    </GlobalLoadingContext.Provider>
  )
}

export default GlobalLoadingProviderContainer
