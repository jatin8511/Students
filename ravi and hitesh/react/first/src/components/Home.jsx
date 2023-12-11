import React, { useContext } from 'react'
import { MainContext } from '../App'
import FirstImg from '../img.jpeg'

const Home = () => {

    let name = useContext(MainContext)
    return (
        <div>
            Hello {name.name}
            <p> age :  {name.age}</p>
            <h3>{name.skill}</h3>
            <img src={FirstImg} width={'300'} alt="" />
        </div>
    )
}

export default Home
