import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

// startup code goes here
// mount function to start up the app

const mount = el => {
  const app = createApp(Dashboard)
  app.mount(el)
}

// If we are in development and sub-app isolation
// call mount immediately

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dashboard-dev-root')

  if (el) {
    // N.B. no onNavigate settings object passed here
    mount(el)
  }
}

// if we are running through container
// we export the mount function

export { mount }
