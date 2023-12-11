import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {
    let [user, setUser] = useState({
        email: '',
        pass: ''
    })

    const UservalueHAndler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const LoginUserHandler = async (e) => {
        e.preventDefault()

        let res = await axios.post('http://localhost:8080/login', user)
        if (res.data.success) {
            alert(res.data.msg)
        } else {
            alert(res.data.msg)

        }

    }
    return (
        <div>
            <form onSubmit={LoginUserHandler}>
                <div>
                    <input name='email' onChange={UservalueHAndler} value={user.email} type="text" placeholder='email' />
                </div>
                <div>
                    <input name='pass' onChange={UservalueHAndler} value={user.pass} type="text" placeholder='password' />
                </div>
                <div><input type="submit" value="Register" /></div>
            </form>
        </div>
    )
}

export default Login
