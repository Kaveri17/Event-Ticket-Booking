import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
import Contact from './components/Contact';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Test from "./Pages/Test"
import Home from './pages/Home'
import About from './pages/About'
import Register from './Pages/Register'
// import Layout from "./layout/Layout"
import Gallery from "./Pages/Gallery"

function MyRoutes() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Layout />}>
    <Route index element= {<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/test' element={<Test/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path="/gallery" element={<Gallery/>} />
   
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />

</Route>
      </Routes>
    </Router>
  );
}

export default MyRoutes;
