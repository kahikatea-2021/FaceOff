import React from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './Header'
import Results from './Results'

function App () {
  return (
    <div>
      <Header />
      <Link to="/" component={Results} />
    </div>
  )
}

export default App
