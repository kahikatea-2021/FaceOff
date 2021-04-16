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
        <div className="col-span-3 flex flex-col items-center">
          <br></br>
          <p>Select your name from the list:  <Dropdown /></p>
          <p>Or upload your image <input id="files" type="file" className="hidden"></input><label htmlFor="files"><u>HERE</u></label></p>

        </div>
        <div className="">
          <img src="/images2/will.png"></img>
        </div>
        <div className="flex items-center">
          <div className="grid grid-cols-4">
            <div></div>
            <Link to="/Results" >
              <button className="bg-pink-500 w-64 h-64 hover:bg-pink-700 text-8xl rounded-full">GO!</button>
            </Link>
          </div>
        </div>
        <div className="">
          <img src="/images2/will-1.png"></img>
        </div>
        <div className="relative inline-block text-left">
        </div>
      </div>
    </>
  )
}

export default Home
