import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Test from "./Pages/Test"
import Home from './pages/Home'
import About from './pages/About'
import Register from './Pages/Register'
import Layout from "./layout/Layout"
import Gallery from "./Pages/Gallery"


const MyRoutes = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Layout />}>
    <Route index element= {<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/test' element={<Test/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path="/gallery" element={<Gallery/>} />

</Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default MyRoutes
