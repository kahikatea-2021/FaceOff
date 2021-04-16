import React, { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './Header'
import request from 'superagent'

function Dropdown({ onSelectStudent }) {
  const [students, changeStudents] = useState([])
  useEffect(() => {
    request.get('/students').then(response => {
      changeStudents(response.body.students)
    })
  }, [])

  function onSelectingStudent(e) {
    const student = students.find(student => student.id === Number(e.target.value))
    onSelectStudent(student)
  }

  return (
    <>

      <select onChange={onSelectingStudent} name="EDA">
        {students.map(student =>
          <option key={student.id} value={student.id}>{student.name}</option>)}

      </select>
    </>
  )
}
export default Dropdown
