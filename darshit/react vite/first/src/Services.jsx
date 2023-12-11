import React, { useCallback, useContext, useMemo, useState } from 'react'
import { MyContext } from './App'
import ServiceSecond from './ServiceSecond'

const Services = () => {
    let [todos, setTodos] = useState(['hii'])
    let [count, setCount] = useState(0)
    const AddNewVal = useCallback(() => {

        setTodos([...todos, 'new Value'])
    }, [todos]
    )
    // const Calc = (x) => {
    //     for (let i = 0; i < 1000000000; i++) { }


    //     return x
    // }
    // let final = useMemo(() => Calc(count), [count]);
    const AddCount = () => {
        setCount(count + 1)
    }

    return (
        <div>

            <ol>
                <h1>{count}</h1>
            </ol>

            <ServiceSecond AddNewVal={AddNewVal} todos={todos} />
            <button onClick={AddCount}>Count</button>
        </div>

    )
}

export default Services
