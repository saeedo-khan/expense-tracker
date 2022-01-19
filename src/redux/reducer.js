import { ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE } from "./action";
import { expenses } from "./states";

export const reducer = (state = expenses, action) => {
    let newExpense;
    switch(action.type) {
        case ADD_EXPENSE:
            newExpense = [...state];
            newExpense.push(action.payload)
            return newExpense
        case DELETE_EXPENSE:
            newExpense = [...state];
            newExpense = newExpense.filter(expens => expens.id !== action.payload)
            return newExpense
        case UPDATE_EXPENSE:
            newExpense = [...state]
            newExpense.map(expense => {
                if(expense.id === action.payload.id){
                    expense.name = action.payload.name;
                    expense.amount = action.payload.amount
                }else{
                    return expense
                }
            });
            return newExpense
        default:
            return expenses
    }
}