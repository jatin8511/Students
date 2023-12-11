import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { MainContext } from '../App'

const Navbar = () => {
    let { cart } = useContext(MainContext)
    return (
        <>
            <div className="navbar">
                <h1><NavLink to={'/'}>Logo</NavLink></h1>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                </ul>
                <div className="cart">
                    <NavLink to={'cart'}>     <FaShoppingCart />{cart.length}</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
