
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, Profile, Chat, Resources, Login } from '../pages'

import { Provider } from 'react-redux'
import store from '../redux/store.js'
import { connect } from 'react-redux'
import { RouterLogic } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider store={store}>
      
          <RouterLogic/>
       
    </Provider>
  )
}

export default App
