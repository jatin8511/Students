import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <p><NavLink to='/'>Home</NavLink></p>
            <p><NavLink to='register'>Register</NavLink></p>
            <p><NavLink to='login'>Login</NavLink></p>
        </div>
    )
}

export default Header
