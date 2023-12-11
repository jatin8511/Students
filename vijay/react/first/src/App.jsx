import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './conponents/Navbar'
import Home from './conponents/Home'
import Contact from './conponents/Contact'
import About from './conponents/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export let MainContext = createContext()

function App() {
  let [name, setName] = useState('deven')

  const Change = () => {
    setName('jatin')
  }
  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={{ name, Change }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About values={{ name: name, age: 20 }} />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
    </>
  )
}



export { App }
