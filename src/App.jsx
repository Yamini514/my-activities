import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Navbar from './components/Navbar'
import Login from './page/Login'
import Register from './page/RegisterForm'
import Programs from './page/Programs'
import Features from './page/Features'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> Navbar is placed outside Routes to be rendered on every page */}
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} /> */}
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/features' element={<Features />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App