import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    
]

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers:{
        addExpense(state,action){
            state.push(action.payload)
        },
        deleteExpense(state, action){
            const { id } = action.payload
            console.log(id)
            const existingExpense = state.find(expense => expense.id === id)
            if(existingExpense){
                return state.filter(expense => expense.id !== id)
            }
        },
        updateExpense(state,action){

            const {id, name, amount} = action.payload;
            const existingExpense = state.find(expense => expense.id === id)
            if(existingExpense){
                existingExpense.name = name;
                existingExpense.amount = amount
            }
        }

    }
})


export const { addExpense, deleteExpense, updateExpense } = expenseSlice.actions;

export default expenseSlice.reducer