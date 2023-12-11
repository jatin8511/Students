import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyLOgo from './logo.png'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext } from 'react'


export const MainContext = createContext()


function App() {
  let [name, setName] = useState(true)

  const Change = () => {
    setName(!name)
  }



  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={{ name: 'darshil' }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home name={name} />} />
            <Route path='about' element={<About name={name} />} />
            <Route path='contact' element={<Contact name={name} />} />
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
    </>
  )


}

export default App
