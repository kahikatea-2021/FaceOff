import React from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './Header'

function Results () {
  return (
    <>
      <center>
        <body className="bg-pink-300">
          <div className="grid grid-rows-3 grid-flow-col gap-5" >
            <div className="col-span-3 row-span-3">
              <img src="/images/giphy.gif"></img>
              <img src="/images/giphy.gif"></img>
            </div>
            <div className="col-span-5 row-span-3">
              <img src="/images/jacklol.png"></img>
            </div>
            <div className="col-span-3 row-span-3">
              <button className="bg-pink-500 hover:bg-pink-700 rounded-full">Click me!</button>
            </div>
            <div className="col-span-5 row-span-3">
              <img src="/images/fortune.jpg"></img>
            </div>
            <div className="col-span-3 row-span-3">
              <img src="/images/giphy.gif"></img>
              <img src="/images/giphy.gif"></img>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/" >
              <button className="bg-pink-500hover:bg-pink-700 rounded-full">Return to Home</button>
            </Link>
          </div>
        </body>
      </center>
    </>
  )
}
export default Results
