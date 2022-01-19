import React from "react";
import ExpenseApp from "./ExpenseApp";
import './App.css';
import { createTheme } from '@material-ui/core';

const theme = createTheme({
  component:{
    FormExpense:{
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style:{
            fontSize: 11
          }
        }
      ]
    }
  }
})

function App() {
  return (
    <div className="App">
        <ExpenseApp />
    </div>
  );
}

export default App;
