import React from 'react'
import { Route } from 'react-router-dom'

function App () {
    return (
        <>
        <p>Hello</p>
        <Route path='/Results' component={Results} />
        </>
    )
}

export default App
