import React from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './Header'

function Results () {
  return (
    <>
      <br></br>
      <br></br>
      <center>
        <body className="bg-pink-300">
          <div className="grid grid-rows-3 grid-flow-col gap-5" >
            <div className="col-span-3 row-span-3">
              <img src="/images2/giphy.gif"></img>
              <img src="/images2/giphy.gif"></img>
            </div>
            <div className="col-span-5 row-span-3">
            </div>
            <div className="col-span-3 row-span-3">
              <button className="bg-pink-500 hover:bg-pink-700 rounded-full w-32 h-32">FACE OFF!</button>
            </div>
            <div className="col-span-5 row-span-3">
            </div>
            <div className="col-span-3 row-span-3">
              <img src="/images2/giphy.gif"></img>
              <img src="/images2/giphy.gif"></img>
            </div>
          </div>
          <div className="">
            <Link to="/" >
              <button className="bg-pink-500 hover:bg-pink-700 rounded-full flex items-center h-12 w-32">HOME</button>
            </Link>
          </div>
        </body>
      </center>
    </>
  )
}
export default Results
