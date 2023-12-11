import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from './App'

import kaipan from './darshit.module.css'

const Contact = () => {
    let [user, setUser] = useState({
        name: '',
        email: '',
        pass: ''
    })
    let { Jatin, name } = useContext(MyContext)


    const UserValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const Register = (e) => {
        e.preventDefault()
        console.log(user)
    }


    return (
        <div className="contact">
            <form onSubmit={Register}>
                <div><input name='name' value={user.name} onChange={UserValue} type="text" placeholder='name' /></div>
                <div><input name='email' value={user.email} onChange={UserValue} type="text" placeholder='email' /></div>
                <div><input name='pass' value={user.pass} onChange={UserValue} type="text" placeholder='pass' /></div>
                <div><button>Register</button></div>
            </form>

        </div>
    )
}

export default Contact
