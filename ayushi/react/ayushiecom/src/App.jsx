import { createContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './comps/Home'
import Cart from './comps/Cart'
import Header from './comps/Header'
import { earbud, shoes, tshirt, tshirtWomen } from './comps/Products'
import Reduc from './comps/Reduc'

export const MainContext = createContext()

function App() {
  let [products, setProducts] = useState([...earbud, ...tshirt, ...shoes, ...tshirtWomen])






  let InitCart = []

  const CartHandler = (state, action) => {

    console.log(action)
    switch (action.type) {

      case 'add':
        let obj = products.find((x) => x.id == action.id)


        state.push(obj)
        break;

      case 'remove':
        let newCart = state.filter((x) => x.id != action.id)

        state = newCart
    }

    return state
  }


  let [cart, dispatch] = useReducer(CartHandler, InitCart)



  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={{ dispatch, products, cart }}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='cart' element={<Cart />} />
            <Route path='redux' element={<Reduc />} />
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
