import React, { useEffect, useState } from 'react'


import styles from './Home.module.css'

const Home = ({ person: { name, age } }) => {
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(0)

    useEffect(
        () => {
            console.log('hello  ')
        }, [count]
    )


    return (
        <>

            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Count 1</button>
            <h3>{count2}</h3>
            <button onClick={() => setCount2(count2 + 1)}>Count 2</button>

            <div className={styles.main}>
                <h1 >{name}</h1>
                <h3>{age}</h3>
            </div>
        </>
    )
}

export default Home
