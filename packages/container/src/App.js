import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Progress from './components/Progress'

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
  productionPrefix: 'con-',
})

// import MarketingApp from './components/MarketingApp'
// import AuthApp from './components/AuthApp'

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header
          onSignOut={() => setIsSignedIn(false)}
          isSignedIn={isSignedIn}
        />
        <main id='main'>
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth/'>
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </main>
      </BrowserRouter>
    </StylesProvider>
  )
}
