
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';


export function addExpense(expense){
    return {
        type: ADD_EXPENSE,
        payload: expense
    }
}

export function deleteExpense(expenseId){
    return {
        type: DELETE_EXPENSE,
        payload: expenseId
    }
}

export function updateExpense(expense){
    return {
        type: UPDATE_EXPENSE,
        payload: expense
    }
}