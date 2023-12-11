import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Products from './components/Products'

export const MainContext = createContext()

function App() {
  const [products, setProducts] = useState(Products)


  let value = { products }
  return (
    <>
      <MainContext.Provider value={value}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </MainContext.Provider>
    </>
  )
}

export default App
