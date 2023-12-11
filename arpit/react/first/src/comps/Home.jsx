import React, { useState } from 'react'
import Kaibi from '../img.jpg'

// { name, age }
const Home = (props) => {
    let { name, age, person } = props
    let [value, setValue] = useState(true)
    const Change = () => {
        setValue(!value)
    }
    return (
        <>
            <h1>{person.name + ' ' + age}</h1>
            <button onClick={Change}>Change</button>
            <h1>Hello Arpit</h1>
            <img src={Kaibi} alt="" />
            <p className={'para'}>Lorem ipsum dolor sit amet.</p>
        </>
    )
}

export default Home
