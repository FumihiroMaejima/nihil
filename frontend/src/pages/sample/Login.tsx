import React, { useState, useContext } from 'react'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
import { PartsSimpleTextField } from '@/components/parts/form/PartsSimpleTextField'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'
import { PartsSimpleToast } from '@/components/parts/toast/PartsSimpleToast'

import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'
import { NotificationContext } from '@/components/container/NotificationProviderContainer'

export const Login: React.VFC = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const { state, updateState } = useContext(NotificationContext)
  console.log('child: ' + JSON.stringify(updateState, null, 2))
  const { login } = useContext(AuthAppContext)

  return (
    <div className="page-container page-container__mx-auto">
      <PartsSimpleToast
        value={state.isDisplay}
        data={{ message: state.message, status: state.status }}
        onAnimationEnd={() => {
          updateState('close', 'normal', false)
        }}
      />

      <PartsSimpleHeading text="Login Page" color="dark-grey" />

      <div className="mxy-4">
        <div className="util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <div className="mxy-4 d-flex flex-align-center">
            <label className="mr-2" htmlFor="email">
              email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <PartsSimpleTextField
              id="email"
              value={emailValue}
              onInput={(e) => setEmailValue(e.currentTarget.value)}
              placeholder="email"
            />
            {/* <small class="p-error">{{ emailError }}</small> */}
          </div>

          <div className="mxy-4 d-flex flex-align-center">
            <label className="mr-2" htmlFor="password">
              password
            </label>
            <PartsSimpleTextField
              id="password"
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
                onClick={async () => {
                  const result = await login(emailValue, passwordValue)

                  updateState(
                    result ? 'login success' : 'login failed',
                    result ? 'success' : 'error',
                    true
                  )
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
