import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Results from './Results'
import Home from './Home'

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/Results/:data' component={Results} />
    </div>

  )
}

export default App
