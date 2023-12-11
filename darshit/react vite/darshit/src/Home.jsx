import React, { useContext } from 'react'
import { MyContext } from './App'

const Home = () => {
    let { products, setProducts } = useContext(MyContext)



    const Change = () => {
        products[0].title = ' title'
        setProducts([...products])
    }
    return (
        <div>

            <h3>{products[0].title}</h3>
            <h1 onClick={Change} >red</h1>
        </div>
    )
}

export default Home
