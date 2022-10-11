import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { StylesProvider as Styles } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default () => {
  return (
    <div>
      <Styles>
        <Router>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </Router>
      </Styles>
    </div>
  )
}
