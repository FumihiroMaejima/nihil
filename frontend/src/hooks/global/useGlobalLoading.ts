// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

export type UseGlobalLoadingType = {
  state: boolean
  updateGlobalLoading: (value: boolean) => void
}

export function useGlobalLoading(): UseGlobalLoadingType {
  const [state, updateGlobalLoading] = React.useState<boolean>(false)

  return {
    state,
    updateGlobalLoading,
  } as const
}
