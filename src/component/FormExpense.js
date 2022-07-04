import React, {useState} from 'react'
import { Button, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { addExpense } from '../features/expensesSlice';
import { v4 as uuidv4 } from 'uuid'

function FormExpense() {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    let dispatch = useDispatch();

    const handleTransaction = () => {

        if(name && amount){
            dispatch(  addExpense({
                id: uuidv4(),
                name: name,
                amount: +amount
            }));
            setName('');
            setAmount('')
        }else{ 
            alert('you have to fill blank')
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        if(e.keyCode === 13) handleTransaction()
    }



    return (
        <form style={{display: 'flex', flexDirection: 'column'}} 
        onSubmit={handleSubmit}
        onKeyUp={handleSubmit}
        >
            <TextField 
            label='Add New Transaction' 
            variant='outlined' 
            style={{ margin: '1rem 0'}} 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <TextField 
            label='Add amount' 
            variant='outlined'
            style={{marginBottom: '1rem'}}
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}

            />

            <Button 
            color='secondary'
            variant='contained'
            onClick={handleTransaction}
            style={{ marginBottom: '1rem'}}
            >Add Transaction</Button>

        </form>
    )
}

export default FormExpense
