import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
  productionPrefix: 'con-',
})

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <main id='main'>
          <MarketingApp />
        </main>
      </BrowserRouter>
    </StylesProvider>
  )
}
