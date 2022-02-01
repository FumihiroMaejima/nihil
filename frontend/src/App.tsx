// import React, { useState } from 'react'
import { AppRouter } from '@/AppRouter'
import { GlobalFooter } from '@/components/_global/GlobalFooter'
import { GlobalHeader } from '@/components/_global/GlobalHeader'
import { GlobalBackToPageTopButton } from '@/components/_global/GlobalBackToPageTopButton'
import { NotificationProviderContainer } from '@/components/container/NotificationProviderContainer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <NotificationProviderContainer>
        <GlobalBackToPageTopButton />
        <GlobalHeader />
        <div className="app-content">
          <AppRouter />
        </div>
        <GlobalFooter />
      </NotificationProviderContainer>
    </div>
  )
}

export default App
