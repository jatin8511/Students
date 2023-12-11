import { createSlice } from "@reduxjs/toolkit";




let initialCounter = [43, 53453, 34, 532, 4]


const counter = createSlice({
    name: 'counter',
    initialState: initialCounter,
    reducers: {
        increase: (state) => {
            state.pop()
            return state
        },
        decrease: (state, action) => {
            let val = state.find((x) => x == action.payload)
            return state = [val]
        },
        decreaseBY: (state, action) => {
            state.push(action.payload)
            return state
        }
    }

})


export const { increase, decrease, decreaseBY } = counter.actions


export default counter.reducer