// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useReducer, useCallback } from 'react'

export type UseNavigationGuardType = {
  isGlobalNavigating: boolean
  updateGlobalNavigating: (value: boolean) => void
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
  const [isGlobalNavigating, dispatch] = React.useReducer(reducer, initialData)

  const updateGlobalNavigating = React.useCallback(
    (nextValue: boolean) => {
      dispatch({ type: 'update', value: nextValue })
    },
    [dispatch]
  )

  return {
    isGlobalNavigating,
    updateGlobalNavigating,
  } as const
}
