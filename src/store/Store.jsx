import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from '../Slices/ToDoSlice'

export const Store =  configureStore({
    reducer:{
        ToDo :ToDoReducer
    }
})