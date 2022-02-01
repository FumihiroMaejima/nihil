/* eslint-disable @typescript-eslint/no-var-requires */
import React, {
  useState,
  ReactNode,
  useCallback,
  createContext,
  Dispatch,
  SetStateAction,
  FC,
} from 'react'

export type UseToastStateType = {
  isOpen: boolean
}

export type State = {
  message: string
  isShow: boolean
}

const initialStateFactory = (initialState?: Partial<State>): State => ({
  message: '',
  isShow: false,
  ...initialState,
})

const initialData: State = {
  message: 'message',
  isShow: false,
}

export function useNotificationCore(initialState?: Partial<State>) {
  /* const [state, dispatch] = React.useReducer(
    reducer,
    initialStateFactory(initialState)
  ) */
  const [state, dispatchTest] = React.useState<State>({ ...initialData })

  const showNotification = (message: string, isShow: true) => {
    dispatchTest({ message, isShow })
  }

  const hideNotification = (message: string, isShow: true) => {
    dispatchTest({ message, isShow })
  }
  //
  return {
    state,
    showNotification,
    hideNotification,
  } as const
}
