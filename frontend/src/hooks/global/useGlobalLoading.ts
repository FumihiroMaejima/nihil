// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useReducer, useCallback } from 'react'

export type UseGlobalLoadingType = {
  isOpenLoading: boolean
  updateGlobalLoading: (value: boolean) => void
}

/**
 * reducer function.
 * @param {boolean} currentValue
 * @param {'update'} action
 * @return {void}
 */
const reducer = (currentValue: boolean, action: 'update') => {
  console.log('下記は現在の値: ')
  console.log('reducer currentValue: ' + currentValue)
  if (action === 'update') {
    return !currentValue
  } else {
    return currentValue
  }
  // return value
}

const initialData = false

export function useGlobalLoading(): UseGlobalLoadingType {
  // const [isOpenLoading, updateGlobalLoading] = React.useState<boolean>(false)
  // const [state, dispatch] = React.useReducer(() => {return {...initialData}}, initialData)
  const [isOpenLoading, dispatch] = React.useReducer(reducer, initialData)

  const updateGlobalLoading = React.useCallback(() => {
    console.log('useCallback Test: ')
    dispatch('update')
  }, [dispatch])

  return {
    isOpenLoading,
    updateGlobalLoading,
  } as const
}
