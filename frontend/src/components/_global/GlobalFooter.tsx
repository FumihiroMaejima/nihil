import React from 'react'
// import '@/assets/scss/index.scss'

export const GlobalFooter: React.VFC = () => {
  // const currentYear = process.env.REACT_APP_CURRENT_YEAR || 2021
  // for vite
  const currentYear = import.meta.env.VITE_APP_CURRENT_YEAR || 2021

  return (
    <footer className="global-footer">
      <address className="">
        Copyright(C){currentYear} Domain Name,Allright Reserved.
      </address>
    </footer>
  )
}

export default GlobalFooter
