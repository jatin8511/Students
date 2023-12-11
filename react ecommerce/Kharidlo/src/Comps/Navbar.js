import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo">
            <h1>Kharidlo</h1>
        </div>
        <ul className="navLinks">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="cart">
            <p>
            <i class="fa-solid fa-cart-shopping"></i>
            <span>0</span>
            </p>
        </div>
    </div>
    </>
  )
}

export default Navbar
