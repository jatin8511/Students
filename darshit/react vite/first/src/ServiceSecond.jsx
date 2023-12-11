import React, { memo } from 'react'

const ServiceSecond = ({ todos, AddNewVal }) => {
    console.log('rendered')
    return (
        <div>

            <div>{todos.map((x) => <li>{x}</li>)}</div>


            <button onClick={AddNewVal}> Add Val</button>
        </div>
    )
}

export default memo(ServiceSecond)
