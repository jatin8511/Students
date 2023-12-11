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
  const [cart, setCart] = useState([])
  const addToCart = (id) => {
    let product = products.find((x) => x.id == id)
    let existing = cart.find((x) => x.id == id)
    if (existing) {
      alert('product already exists')
    } else {
      setCart([...cart, product])
    }
  }
  const Remove = (id) => {
    let upadatedCart = cart.filter((x) => x.id != id)
    setCart(upadatedCart)
  }
  const QtyDecrease = (id) => {
    let product = cart.find((x) => x.id == id)

    if (product.qty <= 1) {
      Remove(id)
    } else {
      product.qty--
      setCart([...cart])
    }

  }
  const QtyIncrease = (id) => {
    let product = cart.find((x) => x.id == id)
    product.qty++
    setCart([...cart])
  }
  let contextValue = {
    products,
    addToCart,
    cart,
    Remove,
    QtyDecrease,
    QtyIncrease
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
