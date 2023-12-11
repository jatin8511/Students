import React, { useContext } from 'react'
import { MyContext } from './App'

const Jatin = () => {

    let { name, products } = useContext(MyContext)
    return (
        <div>
            hii this is jaitn {name}
            <h1>{products[0].title}</h1>
        </div>
    )
}

export default Jatin
