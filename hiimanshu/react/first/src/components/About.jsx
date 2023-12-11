import React, { useContext } from 'react'
import { MainContext } from '../App'
import { Link } from 'react-router-dom'

const About = () => {
    let [name, Change] = useContext(MainContext)
    return (
        <div className={name ? 'dark' : 'light'}>
            About {name ? 'jatin' : 'himanshu'}
            <br />
            <Link to={'/'}>Home</Link>
            <br /><button onClick={Change}>Click</button>
        </div>
    )
}
export default About
