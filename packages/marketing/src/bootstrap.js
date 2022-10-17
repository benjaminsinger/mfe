// MARKETING SUB APP BOOSTRAP
import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

// startup code goes here
// mount function to start up the app

const mount = (el, { onNavigate, defaultHistory }) => {
  // 1. create child app memory history context

  // if provided a defaultHistory( only isolation context ) use that,
  // otherwise create createMemoryHistory (child app rendered through container)
  const history = defaultHistory || createMemoryHistory()

  // 2. if 'onNavigate' func exists within
  // mount call, we are likely not on child app solo dev mode
  // 2b. listen for navigation coming from container app
  if (onNavigate) {
    history.listen(onNavigate)
  }

  // mount the Marketing child app
  ReactDOM.render(<App history={history} />, el)

  return {
    // N.B. any time container changes URL we call this function
    // to pass to child apps as in MarketingApp.js
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    },
  }
}

// If we are in development and sub-app isolation
// call mount immediately

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#marketing-dev-root')

  if (el) {
    // N.B. no onNavigate settings object passed here
    mount(el, { defaultHistory: createBrowserHistory() })
  }
}

// if we are running through container
// we export the mount function

export { mount }
