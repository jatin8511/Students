import React, { useContext } from 'react'
import { MainContext } from '../App'

const Home = () => {
    let { products } = useContext(MainContext)

    return (
        <div>
            <h1>Products</h1>
            <hr />
            <div className="wrapper">
                {products.map((x) => {
                    return <div key={x.id} className="product">
                        <div className="img">
                            <img src={x.img} alt="" />
                        </div>
                        <h2>{x.title}</h2>
                        <h3>{x.price}</h3>
                        <div className="add"><button>Add to cart</button></div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Home
