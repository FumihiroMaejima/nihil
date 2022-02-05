import React, { useState, useContext } from 'react'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
// import { PartsSimpleTextField } from '@/components/parts/form/PartsSimpleTextField'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'
// import { PartsSimpleToast } from '@/components/parts/toast/PartsSimpleToast'
// import { PartsCircleLoading } from '@/components/parts/PartsCircleLoading'

// import { ToastContext } from '@/components/container/ToastProviderContainer'

export const NotFoundPage404: React.VFC = () => {
  // const { updateToastState } = useContext(ToastContext)
  // console.log('child: ' + JSON.stringify(updateToastState, null, 2))

  return (
    <div className="page-container page-container__mx-auto">
      <PartsSimpleHeading text="Not Found 404" color="dark-grey" />

      <div className="mxy-4">
        <div className="util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <div className="mxy-4 d-flex flex-align-center">
            <label className="width-2 text-left">404 not found</label>
            {/* <small class="p-error">{{ emailError }}</small> */}
          </div>

          <div className="mxy-4">
            <div className="d-flex flex-justify-right">
              <PartsSimpleButton text="move" color="green" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage404
