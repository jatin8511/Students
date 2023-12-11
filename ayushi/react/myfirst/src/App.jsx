import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './comps/Header'
import Home from './comps/Home'
import About from './comps/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './comps/Services'
import ErrPage from './comps/ErrPage'
import Register from './comps/Register'


export const MyContext = createContext()


function App() {
  let [name, setName] = useState('jatin')
  let [mode, setMode] = useState(false)



  const Changename = () => {


    setMode(!mode)

  }
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={{ name: 'jatin', skill: 'mern stack ' }}>
          <Header />
          <h1 className={mode ? 'dark' : 'light'}>{name}</h1>
          <button style={{ background: mode ? 'black' : 'white' }} onClick={Changename}>{mode ? 'light mode' : 'Dark Mode'}</button>
          <Routes>
            <Route path='/' element={<Home person={{ name, age: 20 }} />} />
            <Route path='about' element={<About name={name} />} />
            <Route path='services' element={<Services />} />
            <Route path='register' element={<Register />} />
            <Route path='*' element={<ErrPage />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
