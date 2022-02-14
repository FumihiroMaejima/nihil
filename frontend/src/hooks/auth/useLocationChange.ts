/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useRef, useLayoutEffect } from 'react'

import { Location, useLocation } from 'react-router-dom'

export function useLocationChange(callback: (location: Location) => void) {
  const refCallback = useRef<undefined | ((location: Location) => void)>()
  const location = useLocation()

  useLayoutEffect(() => {
    refCallback.current = callback
  }, [callback])

  // ロケーションに変更があったときに処理実行
  useLayoutEffect(() => {
    if (refCallback.current) {
      refCallback.current(location)
    }
  }, [location])
}
