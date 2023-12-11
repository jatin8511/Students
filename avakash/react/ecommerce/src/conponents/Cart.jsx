import React, { useContext } from 'react'
import { MainContext } from '../App'

const Cart = () => {
    let { cart, Remove, QtyDecrease, QtyIncrease } = useContext(MainContext)
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
                            <div className="qty">
                                <button onClick={() => QtyDecrease(x.id)}>-</button>
                                <span>{x.qty}</span>
                                <button onClick={() => QtyIncrease(x.id)}>+</button>
                            </div>
                            <div className="add">
                                <button onClick={() => Remove(x.id)}>Remove</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Cart
