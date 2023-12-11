import { configureStore } from "@reduxjs/toolkit";
import Magan from "./CounterSlice";



const store = configureStore({
    reducer: Magan
})

export default store