import React, { useContext, useReducer, useState } from 'react'
import { MainContext } from '../App'

const Cart = () => {
  let [coun, setCoun] = useState(0)
  let { cart, Remove, dispatch } = useContext(MainContext)

  // const initCounter = 0

  // const reducer = (state, action) => {
  //   switch (action) {
  //     case 'inc':
  //       state = state + 1




  //       break;
  //     case 'dec':
  //       state = state - 1
  //   }




  //   return state

  // }


  // const [counter, dispatch] = useReducer(reducer, initCounter)
  return (
    <div>

      {/* <h1>{counter}</h1>
      <button onClick={() => dispatch('inc')}>Increase</button>
      <button onClick={() => dispatch('dec')}>Decrease</button> */}
      <div className="tshirtsWrapper">
        {
          cart.length ? <div>

            {
              cart.map((x) => {
                return (
                  <div className="product">
                    <div className="img"><img src={x.img} alt="" /></div>
                    <h2>{x.title}</h2>
                    <h3>price : ₹{x.price}</h3>
                    <div className="btn"><button onClick={() => dispatch({ type: 'remove', id: x.id })}>Remove</button></div>
                  </div>
                )

              })
            }

          </div> : <h1>Cart is Empty</h1>
        }
      </div>
    </div>
  )
}

export default Cart
