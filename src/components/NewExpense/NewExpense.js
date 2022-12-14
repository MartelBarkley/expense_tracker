import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import React from "react";

function NewExpense(props) {
    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
        </div>
    );
} 

export default NewExpense;