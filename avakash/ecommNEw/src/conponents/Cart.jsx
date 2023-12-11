import React, { useContext, useState } from 'react'
// import CartItem from './CartItem'
// import Cartheader from './Cartheader'
import { MainContext } from '../App'

function Cart() {

  const { cart, removeItem, increment, decrement } = useContext(MainContext);

  return (
    <>
      <div className='wrapper'>
        {
          cart.map((x) => {
            return <div key={x.id} className="product">
              <div className="img">
                <img src={x.img} alt="" />
              </div>
              <h2>{x.title}</h2>
              <h3>₹{x.price * x.qty}</h3>
              <div id='qtyButton'>
                <button onClick={() => decrement(x.id)}>-</button>
                <span>{x.qty}</span>
                <button onClick={() => increment(x.id)}>+</button>
              </div>
              <div className="add">
                <button onClick={() => { removeItem(x.id) }}>Remove Item</button>
              </div>
            </div>
          })
        }
      </div>
      <div className="total">
        <h3>Total : {cart.reduce((t, x) => t += x.price * x.qty, 0)}</h3>
      </div>
    </>

  )
}

export default Cart