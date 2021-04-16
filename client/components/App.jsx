import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Result from './Result'
import Home from './Home'

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/Results/:data' component={Result} />
    </div>

  )
}

export default App
