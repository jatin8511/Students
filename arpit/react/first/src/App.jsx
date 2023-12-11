
import { useEffect, useState } from 'react'
import './App.css'
import Contact from './comps/Contact'
import Home from './comps/Home'
import Navbar from './comps/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  let [person, setPerson] = useState({
    name: 'arpit', age: 20, skill: 'mern stack developer'
  })




  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home age='20' person={person} name='jatin' />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
