import React, { useEffect, useContext } from 'react'
// import { Link } from 'react-router-dom'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
import { PartsLabelHeading } from '@/components/parts/heading/PartsLabelHeading'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'

import { useMembers } from '@/hooks/modules/members/useMembers'
import { GlobalLoadingContext } from '@/components/container/GlobalLoadingProviderContainer'
import { AuthAppContext } from '@/components/container/AuthAppProviderContainer'
import { GlobalNavigationContext } from '@/components/container/GlobalNavigationGuardProviderContainer'

export const Members: React.VFC = () => {
  const { membersState, getMembersRequest } = useMembers()
  const { updateGlobalLoading } = useContext(GlobalLoadingContext)
  const { getAuthId, getHeaderOptions } = useContext(AuthAppContext)
  const { isNavigating, updateNavigating } = useContext(GlobalNavigationContext)

  // mount後に実行する処理
  /* const onDidMount = (): void => {
    // console.log('member test: ')
    if (getAuthId() !== null) {
    // if (getAuthId() !== null && !isOpenLinerLoading) {
      updateGlobalLoading(true)
      getMembersRequest(getHeaderOptions()).then((res) => {
        console.log('response: ' + JSON.stringify(res, null, 2))
        updateGlobalLoading(false)
      })
    }
  }
  useEffect(onDidMount, []) */

  const globalNavigationHandler = (): void => {
    const afterGlobalNavigationHandler = async () => {
      if (isNavigating && getAuthId() !== null) {
        updateGlobalLoading(true)
        await getMembersRequest(getHeaderOptions()).then((res) => {
          // console.log('response: ' + JSON.stringify(res, null, 2))
          updateGlobalLoading(false)
        })
        // TODO 各ページでこの実行を行う必要がある。
        updateNavigating(false)
      }
    }
    if (isNavigating) {
      afterGlobalNavigationHandler()
    }
  }
  useEffect(globalNavigationHandler, [isNavigating])

  return (
    <div className="members page-container page-container__mx-auto">
      <PartsSimpleHeading text="メンバー ページ" color="dark-grey" />
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
    </div>
  )
}

export default Members
