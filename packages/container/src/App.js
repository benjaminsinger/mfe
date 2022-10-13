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
  const style = {
    color: 'red',
    fontFamily: 'system-ui',
    padding: '1em',
    textAlign: 'center',
    backgroundColor: '#111',
    margin: 0,
  }
  return (
    <StylesProvider generateClassName={createGenerateClassName}>
      <BrowserRouter>
        <Header />
        <main id='main'>
          <MarketingApp />
        </main>
      </BrowserRouter>
    </StylesProvider>
  )
}
