import React, { useContext, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
import { PartsLabelHeading } from '@/components/parts/heading/PartsLabelHeading'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'
import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'
import { GlobalNavigationContext } from '@/components/container/GlobalNavigationGuardProviderContainer'
// import '@/assets/scss/index.scss'

export const Home: React.VFC = () => {
  const { getAuthId } = useContext(AuthAppContext)
  const { isGlobalNavigating, updateGlobalNavigating } = useContext(
    GlobalNavigationContext
  )

  const globalNavigationHandler = (): void => {
    const afterGlobalNavigationHandler = async () => {
      if (isGlobalNavigating && getAuthId() !== null) {
        // TODO グローバルナビゲーション実行後の処理が終了後にフラグをfalseにする
        updateGlobalNavigating(false)
      }
    }
    if (isGlobalNavigating) {
      afterGlobalNavigationHandler()
    }
  }
  useEffect(globalNavigationHandler, [isGlobalNavigating])

  return (
    <div className="home page-container page-container__mx-auto">
      <PartsSimpleHeading text="サンプル ページ" color="dark-grey" />
      <div className="mx-2">
        <PartsLabelHeading text="サブヘッダー1" color="blue" />
        <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
        </div>

        <PartsLabelHeading text="サブヘッダー2" color="red" />
        <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
        </div>

        <PartsLabelHeading text="サブヘッダー3" color="green" />
        <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
        </div>

        <PartsLabelHeading text="サンプルボタン" color="dark-grey" />
        <div className="my-2">
          <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
            <PartsSimpleButton text="blue" color="blue" />
            <PartsSimpleButton text="red" color="red" />
            <PartsSimpleButton text="green" color="green" />
          </div>
        </div>
      </div>

      {/* <div className="">
        <Link to={`/about`}>Go To About</Link>
      </div>
      <div className="">
        <Link to={`/sample`}>Go To Sample</Link>
      </div> */}
    </div>
  )
}

export default Home
