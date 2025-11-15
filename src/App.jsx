import { useState } from 'react'
import './App.css'
import Home from './assets/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Mentor from './assets/pages/Mentor'
import Guide from './assets/pages/Guide'
import Login from './assets/pages/Login'
import Signup from './assets/pages/Signup'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
   
      </Routes>
    </>
  )
}

export default App
