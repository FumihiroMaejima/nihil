/* eslint-disable @typescript-eslint/no-var-requires */
// import React, { useState } from 'react'

export type UseToastStateType = {
  isOpen: boolean
}

export const useToast = () => {
  const state: UseToastStateType = {
    isOpen: false,
  }

  /**
   * return is open state
   * @return {boolean}
   */
  const getToastFlag = (): boolean => {
    return state.isOpen
  }

  /**
   * set toast flag.
   * @param {boolean} value
   * @return {void}
   */
  const setToastFlag = (value: boolean) => {
    state.isOpen = value
  }

  return {
    state,
    getToastFlag,
    setToastFlag,
  }
}

// get return type of a function type
export type UseToastType = ReturnType<typeof useToast>
// export const UseAuthAppStateKey: InjectionKey<UseAuthAppType> = Symbol('useAuthAppState')
export const UseToastStateKey = Symbol('useToastState')
