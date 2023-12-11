import React, { useState } from 'react'
import Kaibi from '../images/coding.jpeg'
const Home = () => {
    let [name, setName] = useState(false)

    const Hello = () => {
        setName(!name)
    }
    return (
        <div>
            <h1 className=''>HOme Page {name ? 'jatin' : 'vijay'}</h1>
            <button onClick={Hello}>{name ? 'vijay' : 'jatin'}</button>
            <div className={name ? 'home dark' : 'home light'}>
                <h1>Hello World</h1>
            </div>
            <img src={Kaibi} alt="" />
        </div>
    )
}

export default Home
