import React, { useContext } from 'react'
import { MainContext } from '../App'

const Card = (props) => {
    let value = useContext(MainContext)
    return (
        <div>
            <h1>Okay {value.name}</h1>
            Hii {props.name ? 'darshil' : 'devanshi'}
        </div>
    )
}

export default Card
