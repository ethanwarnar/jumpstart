
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, Profile, Chat, Resources, Login } from '../pages'
import { AppWrapper } from '../routes/AppWrapper'

import { Redirect } from 'react-router-dom'

class RouterLogic extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" exact component={Login} />
                        <Route path="/macchiato/dashboard" exact component={Home} />
                        <Route path="/macchiato/profile" exact component={Profile} />
                        <Route path="/macchiato/chat" exact component={Chat} />
                        <Route path="/macchiato/resources" exact component={Resources} />
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}



export default RouterLogic