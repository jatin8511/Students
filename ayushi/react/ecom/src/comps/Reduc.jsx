import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease, increaseBy } from '../counter'
const Reduc = () => {
    let counter = useSelector((state) => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(increase())} >Increase</button>
            <button onClick={() => dispatch(decrease())}>Decrease</button>
            <button onClick={() => dispatch(increaseBy(10))}>Increase By</button>
        </div>
    )
}

export default Reduc
