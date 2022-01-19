import React from 'react'
import { Box, Container, Divider, List, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import FormExpense from './component/FormExpense'
import MiniExpense from './component/MiniExpense'
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion';

const useStyles = makeStyles({
    Boxcontainer:{
        maxWidth: '700px',
        display: 'flex',
        justifyContent: 'start-flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto'
    },
    title:{
        padding: '1rem',
        width: '80%',
        textAlign:' center'
    },
    wrapExp:{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '2% 0',
        padding: '1rem',
        ['@media (max-width: 400px)']:{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    titleExpense:{
        textTransform: 'uppercase',
    },
    border:{
        height: '80px',
        width: '2px',
        backgroundColor: 'black',
        display: 'block',
        position: 'relative'
    },
    income:{
        width: '40%',
        textAlign: 'center',
        ['@media (max-width: 400px)']:{
            margin: '1rem 0',
            width: '90%'
        }
    },
    expense:{
        textAlign: 'center',
        color: 'rgb(234, 54, 44)',
        width: '40%',
        ['@media (max-width: 400px)']:{
            width: '90%'
        }
    },
    balance:{
        width: '80%',
        padding: '1rem'
    },
    line:{
        width: '8px',
        height: '100%',
        backgroundColor: 'rgba(234, 54, 44, 0.9)',
        display: 'block',
        position: 'absolute',
        right: '0'
    }
})

function ExpenseApp() {
    const expenses = useSelector(state => state)
    const classes = useStyles()

    const income = expenses.map(expense => expense.amount)
                    .filter(expense => expense > 0)
                    .reduce((a,b) => a+b);
    
    const expensTotal = expenses.map(expense => expense.amount)
                        .filter(expense => expense < 0)
                        .reduce((a,b) => a+b);

    const balance = expenses.map(expense => expense.amount).reduce((a,b) => a+b)


    return (
        <AnimatePresence>
        <Container>
        <Paper width='80%' className={classes.Boxcontainer} >
            <Box className={classes.title}>
                <Typography variant='h5'>Expense Tracker</Typography>
            </Box>


            <Paper className={classes.balance}>
                <Typography style={{textAlign: 'center'}} variant='h6'>Your Balance</Typography>
                <Typography style={{textAlign: 'center'}} variant='h4' component='h2'>{`$ ${balance}`}</Typography>
            </Paper>

            <Box className={classes.wrapExp}>

                <motion.Box 
                className={classes.income}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{opacity: 0}}
                key='modal'
                >
                    <Paper style={{padding: '1rem', position: 'relative'}}>
                        <Typography variant='h5' component={'h1'}>INCOME</Typography>
                        <Typography className={classes.text} variant='h5'>${income}</Typography>
                        <Box sx={{
                            height: '10%',
                            width: '100%',
                            backgroundColor: 'rgba(45, 237, 57, 0.7)',
                            display: 'block',
                            position: 'absolute',
                            left: '0',
                            bottom: '0'
                        }}></Box>
                    </Paper>
                </motion.Box>
                
                <Box className={classes.expense}>
                    <Paper style={{padding: '1rem', position: 'relative'}}>
                        <Typography className={classes.titleExpense} variant='h5'>Expense</Typography>
                        <Typography variant='h5'>{expensTotal}</Typography>
                        <Box sx={{
                            height: '10%',
                            width: '100%',
                            backgroundColor: 'rgba(234, 54, 44, 0.9)',
                            display: 'block',
                            position: 'absolute',
                            left: '0',
                            bottom: '0'
                        }}></Box>
                    </Paper>
                </Box>
            </Box>

            <Box sx={{
                width: '80%'}}>
                <Typography variant='h5' component='h2' style={{marginBottom: '0.5rem'}}>History</Typography>
                <Divider fullWidth/>
            </Box>

            <Box sx={{
                width: '80%',
                height: '300px',
                padding: '0.5rem',
                overflowY: 'auto'
            }}>
                <List>
                 {expenses.map(expense => 
                    <MiniExpense key={expense.id} expense={expense} />
                )}
                </List>

            </Box>

            <Box sx={{
                width: '80%'
            }}>
                <FormExpense />
            </Box>

        </Paper>
        </Container>
        </AnimatePresence>
    )
}

export default ExpenseApp
