import { useState } from 'react'
import './App.css'
import Home from './assets/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Mentor from './assets/pages/Mentor'
import Guide from './assets/pages/Guide'
import Login from './assets/pages/Login'
import { User } from 'lucide-react'
import UserPage from './assets/pages/UserPage'
import RegisterForm from './assets/pages/RegisterForm'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<RegisterForm register={undefined} errors={undefined}/>}></Route>
      <Route path='/user' element={<UserPage/>}></Route>
     
   
      </Routes>
    </>
  )
}

export default App
