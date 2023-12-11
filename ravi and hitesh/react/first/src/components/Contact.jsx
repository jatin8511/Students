import React, { useContext, useState } from 'react'
import { MainContext } from '../App'

const Contact = () => {
    let [user, setUser] = useState({ name: '', email: '', pass: '' })

    let ok = useContext(MainContext)

    const RegisterUser = (e) => {
        e.preventDefault()

        console.log(user)
    }
    const UserVAlue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h1>Hello  {ok.name}</h1>
            <form onSubmit={RegisterUser}>

                <div>
                    <input name='name' onChange={UserVAlue} type="text" placeholder='Name' />
                </div>
                <div>
                    <input name='email' onChange={UserVAlue} type="text" placeholder='Email' />
                </div>
                <div>
                    <input name='pass' onChange={UserVAlue} type="text" placeholder='Password' />
                </div>
                <div><input type="submit" value="Register" /></div>
            </form>
        </div>
    )
}

export default Contact
