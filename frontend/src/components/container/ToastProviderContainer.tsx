/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext } from 'react'
import { useToast, StatusType, UseToastType } from '@/hooks/global/useToast'

const defaultContextValue: UseToastType = {
  state: { message: '', status: 'success', isDisplay: false },
  updateToastState: (
    message: string,
    status: StatusType,
    isDisplay: boolean
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ) => {},
}
export const ToastContext = createContext(defaultContextValue)

export const ToastProviderContainer: React.FC = (props) => {
  const { state, updateToastState } = useToast()
  return (
    <ToastContext.Provider value={{ state, updateToastState }}>
      {props.children}
    </ToastContext.Provider>
  )
}

export default ToastProviderContainer
