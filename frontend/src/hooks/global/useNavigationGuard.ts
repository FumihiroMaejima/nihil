// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useReducer, useCallback } from 'react'

export type UseNavigationGuardType = {
  isNavigating: boolean
  updateNavigating: (value: boolean) => void
}

/**
 * reducer function.
 * @param {boolean} currentValue
 * @param {Record<'value', boolean> & Record<'type', 'update'>} action
 * @return {void}
 */
const reducer = (
  currentValue: boolean,
  action: Record<'value', boolean> & Record<'type', 'update'>
) => {
  if (action.type === 'update') {
    return action.value
  } else {
    return currentValue
  }
}

const initialData = false

export function useNavigationGuard(): UseNavigationGuardType {
  const [isNavigating, dispatch] = React.useReducer(reducer, initialData)

  const updateNavigating = React.useCallback(
    (nextValue: boolean) => {
      dispatch({ type: 'update', value: nextValue })
    },
    [dispatch]
  )

  return {
    isNavigating,
    updateNavigating,
  } as const
}
