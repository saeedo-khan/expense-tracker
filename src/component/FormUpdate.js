import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateExpense } from '../features/expensesSlice'

function FormUpdate({changeIsEdit,id}) {
    const [nameUpdate, setNameUpdate] = useState('')
    const [amountUpdate, setAmountUpdate] = useState('')

    const dispatch = useDispatch()

    const handleUpdate = () => {

        if(nameUpdate && amountUpdate){ 
            dispatch(updateExpense({ id:id, name: nameUpdate, amount: +amountUpdate }))
        }
        
        changeIsEdit(false)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(e.keyCode === 13) handleUpdate()
    }

    return (
        <form 
        onSubmit={handleSubmit}
        onKeyUp={handleSubmit}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <TextField
            variant='outlined'
            label='Name'
            value={nameUpdate}
            onChange={(e)=> setNameUpdate(e.target.value)}
            />
            <TextField
            variant='outlined'
            label='Amount'
            value={amountUpdate}
            onChange={(e)=> setAmountUpdate(e.target.value)}
            />

            <Button
            color='secondary'
            variant='contained'
            onClick={handleUpdate}
            >Apply</Button>
        </form>
    )
}

export default FormUpdate
