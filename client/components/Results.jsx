import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './Header'
import celebrities from '../../server/celebrities'

function Results () {
  const [celebrityObject, setCelebrityObject] = useState()

  function generateRandomId () {
    const min = Math.ceil(1)
    const max = Math.floor(235)
    return Math.floor(Math.random() * (max - min) + min)
  }

  function handleClick () {
    const id = generateRandomId()
    const celebrity = celebrities[id]
    setCelebrityObject(celebrity)
  }

  return (
    <>
      <br></br>
      <br></br>
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
              <button onClick={handleClick} className="bg-pink-500 hover:bg-pink-700 rounded-full">Click me!</button>
            </div>
            <div className="col-span-5 row-span-3">
              {celebrityObject ? <div><h1>{celebrityObject.name}</h1><img src={`https://celebritybucks.com/images/celebs/full/${celebrityObject.celebId}.jpg`} /></div> : <img src="/images/fortune.jpg" />}
            </div>
            <div className="col-span-3 row-span-3">
              <img src="/images/giphy.gif"></img>
              <img src="/images/giphy.gif"></img>
            </div>
          </div>
          <div className="">
            <Link to="/" >
              <button className="bg-pink-500 hover:bg-pink-700 rounded-full flex items-center">Return to Home</button>
            </Link>
          </div>
        </body>
      </center>
    </>
  )
}

export default Results
