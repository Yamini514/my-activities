import React from 'react'
import {BrowserRouter, Routes, Route} from'react-router-dom'
import Home from './page/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> */}
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App