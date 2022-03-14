import React from 'react'
import { Router,  Route } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchPriceList, useFetchProfile, useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'

import Pools from './views/Pools'
import history from './routerHistory'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page


// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  useEagerConnect()
  useFetchPublicData()
  useFetchProfile()
  useFetchPriceList()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Route path="/">
          <Pools />
      </Route>    
  
    </Router>
  )
}

export default React.memo(App)
