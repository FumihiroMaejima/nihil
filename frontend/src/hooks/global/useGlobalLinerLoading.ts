// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

export type useGlobalLinerLoadingType = {
  isOpenLinerLoading: boolean
  updateGlobalLinerLoading: (value: boolean) => void
}

export function useGlobalLinerLoading(): useGlobalLinerLoadingType {
  const [isOpenLinerLoading, updateGlobalLinerLoading] =
    React.useState<boolean>(false)

  return {
    isOpenLinerLoading,
    updateGlobalLinerLoading,
  } as const
}
