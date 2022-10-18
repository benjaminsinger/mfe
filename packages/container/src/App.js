import React, { lazy, Suspense, useState, useEffect } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Router,
  Redirect,
} from 'react-router-dom'
import { createBrowserHistory } from 'history'

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
const DashboardLazy = lazy(() => import('./components/DashboardApp'))

const history = createBrowserHistory()

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
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
              <Route path='/dashboard'>
                {!isSignedIn && <Redirect to='/' />}
                <DashboardLazy />
              </Route>
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </main>
      </Router>
    </StylesProvider>
  )
}
