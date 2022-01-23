import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../features/expensesSlice";

export default configureStore({
    reducer: {
        expenses: expensesReducer
    }
})