
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, Profile, Chat, Resources, Login } from '../pages'
import { AppWrapper } from '../routes/AppWrapper'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'



const mapStateToProps = state => {
    const { dashboard } = state
    return {
        isLoggedIn: dashboard.isLoggedIn,
    }
}

class RouterLogic extends Component {
    constructor(props) {
        super(props);
    }

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



const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouterLogic)