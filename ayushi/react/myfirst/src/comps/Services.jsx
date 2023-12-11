import React, { useContext } from 'react'
import { MyContext } from '../App'

const Services = () => {
    let { name, skill } = useContext(MyContext)

    return (
        <div>
            services {name}
            <br />
            skill:{skill}
        </div>
    )
}

export default Services
