import React, { useEffect, useState } from 'react'
import { Route, Link, useParams } from 'react-router-dom'
import Header from './Header'
import celebrities from '../../server/celebrities'
import request from 'superagent'

function Results(props) {
  const [celebrityObject, setCelebrityObject] = useState()
  const [student, setStudent] = useState()
  console.log(useParams())
  let id = Number(useParams().data)

  useEffect(() => {
    request.get('/students').then(response => {
      console.log(id)

      setStudent(response.body.students.find(student => student.id === id))
      //changeStudents(response.body.students)
    })
  }, [])


  function generateRandomId() {
    const min = Math.ceil(1)
    const max = Math.floor(235)
    return Math.floor(Math.random() * (max - min) + min)
  }

  function handleClick() {
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
              <img src="/images2/giphy.gif"></img>
              <img src="/images2/giphy.gif"></img>
            </div>
            <div className="col-span-5 row-span-3">
              {student ? <div><h1>{student.name}</h1><img className="w-72 h-96" src={student.path} /></div> : <img className="w-72 h-96" src="/images2/fortune.jpg" />}
            </div>
            <div className="col-span-3 row-span-3">

              <button onClick={handleClick} className="bg-pink-500 hover:bg-pink-700 rounded-full w-32 h-32">FACE OFF!</button>
            </div>
            <div className="col-span-5 row-span-3">
              {celebrityObject ? <div><h1>{celebrityObject.name}</h1><img className="w-72 h-96" src={`https://celebritybucks.com/images/celebs/full/${celebrityObject.celebId}.jpg`} /></div> : <img className="w-72 h-96" src="/images2/fortune.jpg" />}
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
