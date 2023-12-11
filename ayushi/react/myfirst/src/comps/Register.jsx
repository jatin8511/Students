import React, { useState } from 'react'

const Register = () => {
    let [user, setUser] = useState({
        name: '',
        email: '',
        pass: ''
    })


    const USerValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    let RegisterUser = (e) => {
        e.preventDefault()

        console.log(user)
        setUser({
            name: '',
            email: '',
            pass: ''
        })
    }
    return (
        <div>
            <form onSubmit={RegisterUser}>
                <div>
                    <input onChange={USerValue} value={user.name} name='name' type="text" placeholder='Name' />
                </div>
                <div>
                    <input onChange={USerValue} value={user.email} name='email' type="text" placeholder='Email' />
                </div>
                <div>
                    <input onChange={USerValue} value={user.pass} name='pass' type="text" placeholder='Password' />
                </div>
                <div><input type="submit" value="Register" /></div>
            </form>
        </div>
    )
}

export default Register
