import React, { useContext } from 'react'
import { PartsSimpleToast } from '@/components/parts/toast/PartsSimpleToast'
import { PartsCircleLoading } from '@/components/parts/loading/PartsCircleLoading'
// import { PartsLinerLoading } from '@/components/parts/loading/PartsLinerLoading'
import { PartsLinerLoadingWrapper } from '@/components/parts/loading/PartsLinerLoadingWrapper'
// global context
// import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'
import { ToastContext } from '@/components/container/ToastProviderContainer'
import { GlobalLinerLoadingContext } from '@/components/container/GlobalLinerLoadingProviderContainer'
import { GlobalLoadingContext } from '@/components/container/GlobalLoadingProviderContainer'

export const GlobalContextWrapper: React.VFC = () => {
  const { isOpenLinerLoading } = useContext(GlobalLinerLoadingContext)
  const { isOpenLoading } = useContext(GlobalLoadingContext)
  const { state, updateToastState } = useContext(ToastContext)
  // const { login } = useContext(AuthAppContext)
  console.log(
    'global wrapper component.: ' + JSON.stringify(updateToastState, null, 2)
  )

  return (
    <div className="global-context-wrapper">
      {/* {isOpenLinerLoading && <PartsLinerLoading />} */}
      {isOpenLinerLoading && <PartsLinerLoadingWrapper />}
      {isOpenLoading && <PartsCircleLoading />}
      <PartsSimpleToast
        value={state.isDisplay}
        data={{ message: state.message, status: state.status }}
        onAnimationEnd={() => {
          updateToastState('close', 'normal', false)
        }}
      />
    </div>
  )
}

export default GlobalContextWrapper
