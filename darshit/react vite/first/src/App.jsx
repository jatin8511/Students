import { createContext, useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Contact from './Contact'
import Navbar from './Navbar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './Services'
import ErrPage from './ErrPage'
import Jatin from './Jatin'
import Products from './Products'
import Redux from './redux/Redux'


export const MyContext = createContext()

function App() {
  const [products, setProducts] = useState(Products)
  const [value, setValue] = useState(false)

  useEffect(() => {
    console.log('called')
  }, [value])
  const initCounter = [342, 3542]

  const reducer = (state, action) => {

    switch (action.type) {
      case 'push':
        state.push('jatin')

        break;

      case 'del':
        let newVal = state.filter((x) => x != action.val)
        state = newVal
    }

    return [...state]
  }




  const [counter, dispatch] = useReducer(reducer, initCounter)


  return (
    <>
      <MyContext.Provider value={{ setProducts, products, name: 'jatin', Jatin }}>
        <BrowserRouter>
          <h1>{value && 'jatin'}</h1>
          <button onClick={() => dispatch({ type: 'push' })}>Increase</button>
          <button onClick={() => dispatch({ type: 'del', val: 342 })}>Decrease</button>
          <Navbar />
          {counter}
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/redux' element={<Redux />} />

            <Route path='*' element={<ErrPage />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>

    </>
  )
}

export default App
