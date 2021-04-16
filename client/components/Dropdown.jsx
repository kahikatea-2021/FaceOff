import React, { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './Header'
import request from 'superagent'

function Dropdown () {
  const [students, changeStudents] = useState([])
  useEffect(() => {
    request.get('/students').then(response => {
      changeStudents(response.body.students)
    })
  }, [])
  return (
    <>

      <select name="EDA">
        {students.map(student =>
          <option key={student.id} value={student.name}>{student.name}</option>)}

      </select>
    </>
  )
}
export default Dropdown
