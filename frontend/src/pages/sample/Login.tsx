import React, { useState, useContext } from 'react'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
import { PartsSimpleTextField } from '@/components/parts/form/PartsSimpleTextField'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'
import { PartsSimpleToast } from '@/components/parts/toast/PartsSimpleToast'
import { PartsCircleLoading } from '@/components/parts/PartsCircleLoading'

import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'
// import { NotificationContext } from '@/components/container/NotificationProviderContainer'
import { ToastContext } from '@/components/container/ToastProviderContainer'
import { GlobalLoadingContext } from '@/components/container/GlobalLoadingProviderContainer'

export const Login: React.VFC = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const { isOpenLoading, updateGlobalLoading } =
    useContext(GlobalLoadingContext)
  const { state, updateToastState } = useContext(ToastContext)
  console.log('child: ' + JSON.stringify(updateToastState, null, 2))
  const { login } = useContext(AuthAppContext)

  return (
    <div className="page-container page-container__mx-auto">
      {isOpenLoading && <PartsCircleLoading />}
      <PartsSimpleToast
        value={state.isDisplay}
        data={{ message: state.message, status: state.status }}
        onAnimationEnd={() => {
          updateToastState('close', 'normal', false)
        }}
      />

      <PartsSimpleHeading text="Login Page" color="dark-grey" />

      <div className="mxy-4">
        <div className="util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <div className="mxy-4 d-flex flex-align-center">
            <label className="width-2 text-left" htmlFor="email">
              email
            </label>
            <PartsSimpleTextField
              id="email"
              className="width-8"
              value={emailValue}
              onInput={(e) => setEmailValue(e.currentTarget.value)}
              placeholder="email"
            />
            {/* <small class="p-error">{{ emailError }}</small> */}
          </div>

          <div className="mxy-4 d-flex flex-align-center">
            <label className="width-2 text-left" htmlFor="password">
              password
            </label>
            <PartsSimpleTextField
              id="password"
              className="width-8"
              value={passwordValue}
              onInput={(e) => setPasswordValue(e.currentTarget.value)}
              placeholder="password"
              type="password"
            />
            {/* <small class="p-error">{{ passwordError }}</small> */}
          </div>

          <div className="mxy-4">
            <div className="d-flex flex-justify-right">
              <PartsSimpleButton
                text="login"
                color="green"
                disabled={emailValue.length === 0 || passwordValue.length === 0}
                onClick={async () => {
                  updateGlobalLoading(true)
                  const result = await login(emailValue, passwordValue)

                  updateToastState(
                    result ? 'login success' : 'login failed',
                    result ? 'success' : 'error',
                    true
                  )
                  updateGlobalLoading(false)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
