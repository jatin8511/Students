
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import { createContext, useState } from 'react'


export let MainContext = createContext()
function App() {
  let [name, setName] = useState(false)



  function Change() {
    setName(!name)
  }
  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={[name, Change]}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='services' element={<Services />} />
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
    </>

  )
}

export default App
