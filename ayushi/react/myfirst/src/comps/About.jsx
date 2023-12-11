import React from 'react'
import styles from './About.module.css'

const About = ({ name }) => {



    return (
        <>
            <div className={styles.main}>
                <h1>Hello {name}</h1>
            </div>
        </>
    )
}

export default About
