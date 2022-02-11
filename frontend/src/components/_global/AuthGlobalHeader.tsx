import React, { useState, useContext } from 'react'
import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'
import { ToastContext } from '@/components/container/ToastProviderContainer'
import { GlobalLoadingContext } from '@/components/container/GlobalLoadingProviderContainer'

export const AuthGlobalHeader: React.VFC = () => {
  // ナビゲーションメニューの開閉フラグ
  const [isOpen, setOpenStatus] = useState(false)
  const { logout } = useContext(AuthAppContext)
  const { updateToastState } = useContext(ToastContext)
  const { updateGlobalLoading } = useContext(GlobalLoadingContext)

  const signOutHandler = async () => {
    updateGlobalLoading(true)
    const result = await logout()
    updateGlobalLoading(false)

    if (result) {
      // リダイレクトするとトーストが出せない。
      // updateToastState('Logout Success.', 'success', true)
      // Router外の為baseNameも指定
      location.assign('/admin/login')
    } else {
      updateToastState('Logout Filed', 'error', true)
    }
  }

  return (
    <header className="global-header">
      <nav className="global-header__navigation">
        <div className="global-header__title-wrapper">
          <span className="global-header__title">Header Name</span>
        </div>
        <div className="global-header__blok-button-area">
          <button
            className="global-header__blok-button"
            onClick={() => setOpenStatus((isOpen) => !isOpen)}
          >
            <svg
              className="global-header__blok-button-image"
              viewBox={isOpen === true ? '0 0 30 30' : '0 0 20 20'}
            >
              <title>Menu</title>
              {isOpen === true && (
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              )}
              {isOpen === false && (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              )}
            </svg>
          </button>
        </div>
        <div
          className={
            isOpen === true
              ? 'global-header__navigation-menu-block'
              : 'global-header__navigation-menu-hidden'
          }
        >
          <div className="global-header__navigation-item">
            <a
              className="global-header__navigation-item-button"
              href="#responsive-header1"
            >
              test link1
            </a>
            <a
              className="global-header__navigation-item-button"
              href="#responsive-header2"
            >
              test link2
            </a>
            <a
              className="global-header__navigation-item-button"
              href="#responsive-header3"
            >
              test link3
            </a>
            <div
              className="global-header__navigation-item-button"
              onClick={signOutHandler}
            >
              <span>Sign Out</span>
            </div>
          </div>
        </div>
        {isOpen === false && (
          <div className="global-header__blok-button-left">
            <button
              className={`parts-simple-button parts-simple-button__color--dark-grey util-color__text--white`}
              onClick={signOutHandler}
            >
              Sign Out
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default AuthGlobalHeader
