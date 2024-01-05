import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense =(props)=>{
    const NewExpenseData =(enteredExpenseData)=>{
        const NewExpenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddNewExpense(NewExpenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpense={NewExpenseData}/>
        </div>
    )
}

export default NewExpense;