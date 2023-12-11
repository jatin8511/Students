import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './productSlice'

function App() {
  let users = useSelector((state) => state.products)
  console.log(users)
  let dispatch = useDispatch()
  const CreateUser = () => {
    let name = prompt('enter your name...')
    let age = prompt('enter your age...')
    let skill = prompt('enter your skill...')
    dispatch(add({ name, age, skill }))
  }
  return (
    <>
      <h1>Hello  Users</h1>
      <div className="wrapper">
        {
          users.map((x) => {
            return <div className="user">
              <h2>{x.name}</h2>
              <p>{x.skill}</p>
              <button onClick={() => dispatch(remove(x.name))}>Remove</button>
              <hr />
            </div>
          })

        }
      </div >
      <button onClick={CreateUser}>Add New User</button>
    </>
  )
}

export default App
