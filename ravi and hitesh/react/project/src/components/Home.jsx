import React from 'react'
import Bg from './images/homeBg.jpeg'
const Home = () => {
    return (
        <div>
            <div className="home" style={{ backgroundImage: `linear-gradient(to right,rgba(0,0,0,.9),rgba(0,0,0,0)),url(${Bg})` }}>
                <div>
                    <h1>FRESH <span>FOOD IN THE</span> MORNING </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, nulla dolorem possimus soluta fuga quos.</p>
                    <button>Get Yours Now</button>
                </div>
            </div>

        </div>
    )
}

export default Home
