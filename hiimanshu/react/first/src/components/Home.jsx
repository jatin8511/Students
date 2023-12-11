import React, { useContext, useRef } from 'react'
import MyImg from '../images/main.jpg'
import { MainContext } from '../App'
const Home = () => {
    let head = useRef()

    let name = useContext(MainContext)
    const ChangeH1 = () => {
        console.log(head)
        head.current.style.color = 'blue'
    }

    return (
        <>
            <div className="home">
                <h1>{name}</h1>
                <h1 ref={head} style={{
                    color: 'red',
                    backgroundColor: 'blue',
                    height: '50vh',
                    backgroundImage: `url(${MyImg})`
                }}>This is a Image</h1>
                <button onClick={ChangeH1}>Change h1</button>
                <img src={MyImg} alt="" />
            </div>
        </>
    )
}

export default Home
