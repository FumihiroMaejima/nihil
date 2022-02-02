// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

export type UseToastStateType = {
  isOpen: boolean
}

export type State = {
  message: string
  isDisplay: boolean
}

const initialStateFactory = (initialState?: Partial<State>): State => ({
  message: '',
  isDisplay: false,
  ...initialState,
})

export const initialData: State = {
  message: 'message',
  isDisplay: false,
}

export type UseNotificationCoreType = {
  state: State
  updateState: (message: string, isDisplay: boolean) => void
}

export function useNotificationCore(): UseNotificationCoreType {
  const [state, dispatch] = React.useState<State>({ ...initialData })
  // const [state, dispatch] = React.useReducer(() => {return {...initialData}}, initialData)

  const updateState = (message: string, isDisplay: boolean) => {
    dispatch({ ...state, message, isDisplay })
  }

  return {
    state,
    updateState,
  } as const
}
