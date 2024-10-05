import { configureStore } from "@reduxjs/toolkit"
import cartReducer from '../Features/AddcartSlice'


export  const store =configureStore({
    reducer : {
       cart :cartReducer, 
    },
})


