import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='about'>About</NavLink></li>
                <li><NavLink to='services'>Services</NavLink></li>
                <li><NavLink to='register'>Register</NavLink></li>
            </ul>
        </>
    )
}

export default Header
