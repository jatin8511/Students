import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Contact = () => {
    let [val, setVal] = useState(0)
    let [val2, setVal2] = useState(0)
    useEffect(() => {
        console.log('rendered')
    }, [val2])
    return (
        <>
            <h1>Contact {val}</h1>
            <h1>Contact {val2}</h1>
            <button onClick={() => setVal(val + 1)}>Change val</button>
            <button onClick={() => setVal2(val2 + 1)}>Change val</button>
            <button><Link to={'/'}>Redirect to home...</Link></button>
        </>
    )
}

export default Contact