// import { useState } from 'react'
import { AppRouter } from '@/AppRouter'
// import { AuthGlobalHeader } from '@/components/_global/AuthGlobalHeader'
import { GlobalFooter } from '@/components/_global/GlobalFooter'
// import { GlobalHeader } from '@/components/_global/GlobalHeader'
import { GlobalBackToPageTopButton } from '@/components/_global/GlobalBackToPageTopButton'
import { GlobalContextWrapper } from '@/components/_global/context/GlobalContextWrapper'
import { AuthAppProviderContainer } from '@/components/container/AuthAppProviderContainer'
import { GlobalLinerLoadingProviderContainer } from '@/components/container/GlobalLinerLoadingProviderContainer'
import { GlobalLoadingProviderContainer } from '@/components/container/GlobalLoadingProviderContainer'
import { ToastProviderContainer } from '@/components/container/ToastProviderContainer'

function App() {
  // const [isAuthenticated, updateIsAuth] = useState(false)

  return (
    <div className="app">
      <GlobalLinerLoadingProviderContainer>
        <GlobalLoadingProviderContainer>
          <AuthAppProviderContainer>
            <ToastProviderContainer>
              <GlobalContextWrapper />
              <GlobalBackToPageTopButton />
              {/* {isAuthenticated ? <AuthGlobalHeader /> : <GlobalHeader />} */}
              <div className="app-content">
                <AppRouter />
              </div>
              <GlobalFooter />
            </ToastProviderContainer>
          </AuthAppProviderContainer>
        </GlobalLoadingProviderContainer>
      </GlobalLinerLoadingProviderContainer>
    </div>
  )
}

export default App
