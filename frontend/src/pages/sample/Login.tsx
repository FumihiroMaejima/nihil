import React, { useState } from 'react'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
import { PartsSimpleTextField } from '@/components/parts/form/PartsSimpleTextField'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'
import { PartsSimpleToast } from '@/components/parts/toast/PartsSimpleToast'

export const Login: React.VFC = () => {
  const [toastValue, setToastValue] = useState<boolean>(false)
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  return (
    <div className="page-container page-container__mx-auto">
      <PartsSimpleToast
        value={toastValue}
        data={{ text: 'test message', status: 'success' }}
        onAnimationEnd={() => {
          setToastValue(false)
        }}
      />
      <PartsSimpleHeading
        text="Login Page"
        color="dark-grey"
        isDashed={false}
        isDouble={false}
      />

      <div className="mxy-2">
        <button
          onClick={() => {
            setToastValue(true)
          }}
        >
          open toast
        </button>
      </div>

      <div className="mxy-2">
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
              <PartsSimpleButton text="login" color="green" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
