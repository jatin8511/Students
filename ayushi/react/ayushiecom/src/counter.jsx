import { createSlice } from "@reduxjs/toolkit";




const initVal = 0
const counter = createSlice({
    name: 'counter',
    initialState: initVal,
    reducers: {
        increase: (state, action) => {
            return state += 1
        },
        decrease: (state, action) => {
            return state -= 1
        },
        increaseBy: (state, action) => {
            return state = state + action.payload
        }
    }
})


export const { increase, decrease, increaseBy } = counter.actions

export default counter.reducer