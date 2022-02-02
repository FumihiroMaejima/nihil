import React, { useState, useContext } from 'react'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
import { PartsSimpleTextField } from '@/components/parts/form/PartsSimpleTextField'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'
import { PartsSimpleToast } from '@/components/parts/toast/PartsSimpleToast'

import { NotificationContext } from '@/components/container/NotificationProviderContainer'

export const Login: React.VFC = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const { state, updateState } = useContext(NotificationContext)
  console.log('child: ' + JSON.stringify(updateState, null, 2))

  return (
    <div className="page-container page-container__mx-auto">
      <PartsSimpleToast
        value={state.isDisplay}
        data={{ text: state.message, status: 'success' }}
        onAnimationEnd={() => {
          updateState('close', false)
        }}
      />

      <PartsSimpleHeading text="Login Page" color="dark-grey" />

      <div className="mxy-4">
        <div className="util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <div className="mxy-4">
            <PartsSimpleTextField
              value={emailValue}
              onInput={(e) => setEmailValue(e.currentTarget.value)}
              placeholder="email"
            />
          </div>

          <div className="mxy-4">
            <PartsSimpleTextField
              value={passwordValue}
              onInput={(e) => setPasswordValue(e.currentTarget.value)}
              placeholder="password"
              type="password"
            />
          </div>

          <div className="mxy-4">
            <div className="d-flex flex-justify-right">
              <PartsSimpleButton
                text="login"
                color="green"
                onClick={() => {
                  updateState('open toast', true)
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
