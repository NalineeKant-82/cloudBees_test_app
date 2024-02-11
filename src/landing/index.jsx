import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GetUser from './getUser'
import UserrDetails from './userDetails'

const LandingPage = () => {
  return (
    <Routes>
        <Route path='/' element={<GetUser/>}/>
        <Route path='/users/:username' element={<UserrDetails/>}/>
    </Routes>
  )
}

export default LandingPage