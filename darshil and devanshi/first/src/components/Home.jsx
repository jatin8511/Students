import { useContext, useEffect, useRef, useState } from 'react'
import Card from './Card'
import './Home.css'
import { MainContext } from '../App'


const Home = (props) => {
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(0)
    let heading = useRef()
    let btn = useRef()
    useEffect(() => {
        console.log('rendered')
        console.log(heading)
        heading.current.style.color = 'red'
    }, [count2])
    let name = useContext(MainContext)



    // let name = 'maahi'
    return (
        <>
            <div className="home">
                <h3 className=''>
                    {name.name} / {count2}
                </h3>
                <button ref={btn} onClick={() => setCount(count + 1)}>Change</button>
                <button onClick={() => setCount2(count2 + 1)}>Change</button>


                <h1 ref={heading} className={props.name ? 'dark' : 'light'}>Hello {props.name ? 'maahi' : 'jatin'}</h1>
                <Card name={props.name} />
            </div>
        </>
    )
}

export default Home