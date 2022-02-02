import React, { createContext } from 'react'
import {
  useNotificationCore,
  initialData,
  UseNotificationCoreType,
} from '@/hooks/useNotification'

/* type Props = {
  open: boolean
} */

const defaultContextValue: UseNotificationCoreType = {
  state: { message: '', isDisplay: false },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateState: (message: string, isDisplay: boolean) => {},
}
export const NotificationContext = createContext(defaultContextValue)

export const NotificationProviderContainer: React.FC = (props) => {
  const { state, updateState } = useNotificationCore()
  return (
    <NotificationContext.Provider value={{ state, updateState }}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationProviderContainer
