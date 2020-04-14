
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { Home, Profile, Jobs, Chat, Resources, Login } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/jumpstart/home" exact component={Home} />
        <Route path="/jumpstart/profile" exact component={Profile} />
        <Route path="/jumpstart/jobs" exact component={Jobs} />
        <Route path="/jumpstart/chat" exact component={Chat} />
        <Route path="/jumpstart/resources" exact component={Resources} />
      </Switch>
    </Router>
  )
}

export default App
