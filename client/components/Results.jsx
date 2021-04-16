import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import celebrities from '../../server/celebrities'

function Results () {
  const [celebrityObject, setCelebrityObject] = useState()
  const [matchingPercent, setmatchingPercent] = useState()

  function generateRandomNumber () {
    const min = Math.ceil(1)
    const max = Math.floor(100)
    return Math.floor(Math.random() * (max - min) + min)
  }

  function generateRandomId () {
    const min = Math.ceil(1)
    const max = Math.floor(235)
    return Math.floor(Math.random() * (max - min) + min)
  }

  function handleClick () {
    const id = generateRandomId()
    const matchingPercent = generateRandomNumber()
    const celebrity = celebrities[id]
    setmatchingPercent(matchingPercent)
    setCelebrityObject(celebrity)
  }

  return (
    <>

      <br></br>
      <br></br>
      <center>
        {matchingPercent ? <h1>You look {matchingPercent}  % like:</h1> : <h1>Which celebrity do YOU look like?!</h1>}
        <body className="bg-pink-300">
          <div className="grid grid-rows-3 grid-flow-col gap-5" >
            <div className="col-span-3 row-span-3">
              <img src="/images2/giphy.gif"></img>
            </div>
            <div className="col-span-5 row-span-3">
            </div>
            <div className="col-span-3 row-span-3">

              <button onClick={handleClick} className="bg-pink-500 hover:bg-pink-700 rounded-full w-32 h-32">FACE OFF!</button>
            </div>
            <div className="col-span-5 row-span-3">
              {celebrityObject ? <div><h1>{celebrityObject.name}</h1><img src={`https://celebritybucks.com/images/celebs/full/${celebrityObject.celebId}.jpg`} /></div> : <img src="/images/fortune.jpg" />}
            </div>
            <div className="col-span-3 row-span-3">
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
