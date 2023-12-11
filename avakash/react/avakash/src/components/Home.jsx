import React from 'react'
import Kaibi from '../images/coding2.jpg'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1>Hello Home</h1>
            <img src={Kaibi} alt="kaibi" />
            <img src="https://media.istockphoto.com/photos/javascript-computer-code-picture-id509628556?k=6&m=509628556&s=170667a&w=0&h=BfYwgQaRSWBaaIIMykhsFHRNR2HGJ0Ph6hYqc0UNSDA=" alt="" />
        </div>
    )
}

export default Home
