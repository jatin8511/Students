import React, { useRef } from 'react'
import magan from '../images/coding.jpeg'

const About = (props) => {

    let heading = useRef()
    const Change = () => {
        console.log(heading.current)
        heading.current.style.color = 'white'
    }
    return (
        <>
            <div className="about" style={{ backgroundImage: `url(${magan})` }}>
                <h1 ref={heading}>About {props.values.name} {props.values.age}</h1>
                <h1 ref={heading}>About {props.values.name} {props.values.age}</h1>
                <button onClick={Change}>Change</button>
            </div>
        </>
    )
}

export default About
