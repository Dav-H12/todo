import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

const store = configureStore({
    reducer : {
        todosData : todoSlice
    }
})


export default store