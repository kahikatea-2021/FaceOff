import React from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './Header'
import Results from './Results'
import Dropdown from './Dropdown'

function Home () {
  return (
    <>

      <Route path='/Results' component={Results} />
      <div className="grid grid-cols-3">
        <div className="">
          <img src="/images/will.png"></img>
        </div>
        <div className="flex items-center">
          <Link to="/Results" >
            <button className="bg-pink-500 w-64 h-64 hover:bg-pink-700 text-8xl rounded-full">GO!</button>
          </Link>
        </div>
        <div className="">
          <img src="/images/will-1.png"></img>
        </div>
        <div className="relative inline-block text-left">
        </div>
        {/* <Dropdown /> */}
      </div>
    </>
  )
}

export default Home
