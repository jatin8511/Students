import React, { useContext } from 'react'
import { MainContext } from '../App'

const Home = () => {

    let { products, AddToCart, dispatch } = useContext(MainContext)
    return (
        <>
            <div>
                <h3>Tshirts</h3>
                <div className="tshirtsWrapper">
                    {
                        products.map((x) => {
                            return (
                                x.category == 'tshirt' && <div className="product">
                                    <div className="img"><img src={x.img} alt="" /></div>
                                    <h2>{x.title}</h2>
                                    <h3>price : ₹{x.price}</h3>
                                    <div className="btn"><button onClick={() => dispatch({ type: 'add', id: x.id })}>Add To Cart</button></div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
            <div>
                <h3>shoes</h3>
                <div className="tshirtsWrapper">
                    {
                        products.map((x) => {
                            return (
                                x.category == 'shoes' && <div className="product">
                                    <div className="img"><img src={x.img} alt="" /></div>
                                    <h2>{x.title}</h2>
                                    <h3>price : ₹{x.price}</h3>
                                    <div className="btn"><button>Add To Cart</button></div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home
