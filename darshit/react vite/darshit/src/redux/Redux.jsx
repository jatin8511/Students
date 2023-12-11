import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease, decreaseBY } from './CounterSlice'
const Redux = () => {
    let jatin = useSelector((state) => state)
    let dispatch = useDispatch()

    return (
        <div>

            <hr />
            <h1>REDUX</h1>
            <h2>{jatin}</h2>
            <button onClick={() => dispatch(increase())}>Increase</button>
            <button onClick={() => dispatch(decrease(3433))}>Decrease</button>
            <button onClick={() => dispatch(decreaseBY(10))}>increase by 10</button>


        </div>
    )
}

export default Redux
