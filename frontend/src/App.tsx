// import React, { useState } from 'react'
import { AppRouter } from '@/AppRouter'
import { GlobalFooter } from '@/components/_global/GlobalFooter'
import { GlobalHeader } from '@/components/_global/GlobalHeader'
import { GlobalBackToPageTopButton } from '@/components/_global/GlobalBackToPageTopButton'
import { GlobalContextWrapper } from '@/components/_global/context/GlobalContextWrapper'
import { AuthAppProviderContainer } from '@/components/container/AuthAppProviderContainer'
import { GlobalLoadingProviderContainer } from '@/components/container/GlobalLoadingProviderContainer'
import { ToastProviderContainer } from '@/components/container/ToastProviderContainer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <GlobalLoadingProviderContainer>
        <AuthAppProviderContainer>
          <ToastProviderContainer>
            <GlobalContextWrapper />
            <GlobalBackToPageTopButton />
            <GlobalHeader />
            <div className="app-content">
              <AppRouter />
            </div>
            <GlobalFooter />
          </ToastProviderContainer>
        </AuthAppProviderContainer>
      </GlobalLoadingProviderContainer>
    </div>
  )
}

export default App
