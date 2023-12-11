import { createSlice } from '@reduxjs/toolkit'


let InitValue = [
    {
        name: 'jatin',
        age: 20,
        skill: 'mern stack developer'
    },
    {
        name: 'avakash',
        age: 22,
        skill: 'react js developer'
    },
    {
        name: 'rahul',
        age: 21,
        skill: 'android developer'
    },
]

const productSlice = createSlice({
    name: 'products',
    initialState: InitValue,
    reducers: {
        add: (state, action) => {
            console.log(action.payload)

            state.push(action.payload)
            return state
        },
        remove: (state, action) => {
            console.log(action.payload)

            let updatedState = state.filter((x) => x.name != action.payload)
            state = updatedState
            return state
        }
    }
})


export default productSlice.reducer

export const { add, remove } = productSlice.actions