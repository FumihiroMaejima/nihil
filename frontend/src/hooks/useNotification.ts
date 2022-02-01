// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

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

export const initialData: State = {
  message: 'message',
  isShow: false,
}

export type UseNotificationCoreType = {
  state: State
  updateState: (message: string, isShow: boolean) => void
}

export function useNotificationCore() {
  const [state, dispatch] = React.useState<State>({ ...initialData })
  // const [state, dispatch] = React.useReducer(() => {return {...initialData}}, initialData)

  const updateState = (message: string, isShow: boolean) => {
    dispatch({ ...state, message, isShow })
  }

  return {
    state,
    updateState,
  } as const
}
