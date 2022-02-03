// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

export type UseGlobalLoadingType = {
  isOpenLoading: boolean
  updateGlobalLoading: (value: boolean) => void
}

export function useGlobalLoading(): UseGlobalLoadingType {
  const [isOpenLoading, updateGlobalLoading] = React.useState<boolean>(false)

  return {
    isOpenLoading,
    updateGlobalLoading,
  } as const
}
