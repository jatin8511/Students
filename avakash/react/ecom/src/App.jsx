import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './conponents/Home'
import Cart from './conponents/Cart'
import Navbar from './conponents/Navbar'
import Products from './conponents/Products'


export const MainContext = createContext()

function App() {
  const [products, setProducts] = useState(Products)

  let contextValue = {
    products
  }
  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={contextValue}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
