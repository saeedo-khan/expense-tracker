import React from 'react'
import { ListItem, Typography, Box, IconButton} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { useDispatch } from 'react-redux'
import { deleteExpense } from '../features/expensesSlice';
import FormUpdate from './FormUpdate';
import { motion } from 'framer-motion/dist/framer-motion';


function MiniExpense({ expense }) {
    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = React.useState(false)

    const handleEditing = () => {
        setIsEdit(!isEdit)
    }

    return (
        <>
        {isEdit ? <FormUpdate changeIsEdit={setIsEdit} id={expense.id}/> :
            <ListItem
                button
            >
                <Typography>{expense.name}</Typography>
                <Box sx={{
                    marginLeft: 'auto', 
                    border: '1px solid rgba(0,0,0,0.2)', 
                    padding: '0.5rem', 
                    width:'9vw',
                    textAlign: 'center',
                    marginRight: '0.3rem'
                    }}>
                    <Typography variant='body1'>{expense.amount}</Typography>
                </Box>
                <Box>
                    <IconButton onClick={handleEditing}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => dispatch(deleteExpense(expense))}>
                        <DeleteSweepIcon />
                    </IconButton>
                </Box>
                {/* 'rgba(45, 237, 57, 0.9)' */}
                <Box sx={{
                    width: '8px',
                    height: '100%',
                    bgcolor:  expense.amount > 0 ? 'rgba(45, 237, 57, 0.9)' : 'rgba(234, 54, 44, 0.9)' ,
                    display: 'block',
                    position: 'absolute',
                    right: '0'
                }}></Box>
            </ListItem>
        }
        </>
            
    )
}

export default MiniExpense
