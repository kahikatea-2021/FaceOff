import React from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './Header'
import Results from './Results'

function App () {
  return (
    <div>
      <body className="bg-pink-300">
        <Header />
        <Route path='/Results' component={Results} />
        <div className="grid grid-cols-2">
          <div className=" justify-self-end">
            <img src="/images/will.png"></img>
          </div>
          <div className="flex items-center">
            <Link to="/Results" >
              <button className="bg-pink-500 w-64 h-64 hover:bg-pink-700 rounded-full">GO!</button>
            </Link>
          </div>
        </div>
      </body>
    </div>
  )
}

export default App
