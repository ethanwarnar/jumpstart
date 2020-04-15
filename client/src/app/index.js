
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, Profile, Chat, Resources, Login } from '../pages'

import { Provider } from 'react-redux'
import store from '../redux/store.js'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/jumpstart/home" exact component={Home} />
          <Route path="/jumpstart/profile" exact component={Profile} />
          <Route path="/jumpstart/chat" exact component={Chat} />
          <Route path="/jumpstart/resources" exact component={Resources} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
