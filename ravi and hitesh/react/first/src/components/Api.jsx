import React, { useContext } from 'react'
import { MainContext } from '../App'

const Api = () => {
    let { users } = useContext(MainContext)
    return (
        <div>
            {
                users.map((x) => {
                    return <div>{x.name}</div>
                })
            }
        </div >
    )
}

export default Api
