import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './comps/Home'
import Header from './comps/Header'
import axios from 'axios'
import Register from './comps/Register'
import Login from './comps/Login'
export const MainContext = createContext()

function App() {
  let [products, setProducts] = useState([])

  let getAllProducts = async () => {
    let result = await axios.get('http://localhost:8080/products/getall')

    setProducts(result.data)
  }
  useEffect(() => {
    getAllProducts()


  }, [])


  return (
    <>
      <MainContext.Provider value={{ products }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </MainContext.Provider>
    </>
  )
}

export default App
