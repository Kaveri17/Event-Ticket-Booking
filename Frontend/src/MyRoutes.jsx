import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Test from "./Pages/Test"
import Home from './pages/Home'
import About from './pages/About'
import Register from './Pages/Register'



const MyRoutes = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route index element= {<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/test' element={<Test/>}/>
    <Route path='/register' element={<Register/>}/>


   </Routes>
   </BrowserRouter>
   </>
  )
}

export default MyRoutes