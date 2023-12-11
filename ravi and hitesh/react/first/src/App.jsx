import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Api from './components/Api'
import axios from 'axios'


export const MainContext = createContext()

function App() {
  let [users, setUSers] = useState([])
  let [name, setName] = useState('jatin')


  const Change = () => {
    setName('magan')
  }
  const Change2 = () => {
    setName('chhagan')
  }

  let getData = async () => {
    let result = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUSers(result.data)
  }


  useEffect(() => {
    console.log('rendered')
    getData()
  }, [name])



  return (
    <>

      <BrowserRouter>
        <MainContext.Provider value={{ name: name, age: 20, skill: 'mern stack developer', users }} >
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='api' element={<Api />} />
          </Routes>


          {/* <button onClick={Change}>Change</button>
          <button onClick={Change2}>Change2</button> */}
        </MainContext.Provider>
      </BrowserRouter>

    </>

  )
}

export default App
