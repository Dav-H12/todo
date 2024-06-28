import { createSlice } from "@reduxjs/toolkit";

const todoSlice =createSlice({
    name : 'todoSlice',
    initialState : {
        text : '',
        todos : []
    },
    reducers : {
        changeText(state,action){
            state.text = action.payload
        },
        add(state){
            state.todos = [...state.todos,{id : Date.now(),title : state.text}]

        },
        del(state,action){
            state.todos = state.todos.filter((el)=> el.id != action.payload)
        }
    }
})

export const {changeText,add,del}=todoSlice.actions

export default todoSlice.reducer
