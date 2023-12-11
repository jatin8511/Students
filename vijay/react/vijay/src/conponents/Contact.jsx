import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../App'

const Contact = () => {
    let [count, setCount] = useState(0)
    let [count1, setCount1] = useState(0)

    let { name, Change } = useContext(MainContext)

    useEffect(
        () => {
            console.log('rendered')
        },
        [count1])
    return (
        <div>
            <h1>{name}</h1>
            <h1>{count} <button onClick={() => setCount(count + 1)}>Change</button></h1>
            <h1>{count1} <button onClick={() => setCount1(count1 + 1)}>Change</button></h1>
            <h1>{count1} <button onClick={Change}>Change</button></h1>

        </div>
    )
}

export default Contact
