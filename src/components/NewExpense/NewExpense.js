import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense =(props)=>{
    const [FormStatus,setFormStatus]=useState(false);
    const NewExpenseData =(enteredExpenseData)=>{
        const NewExpenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddNewExpense(NewExpenseData);
    };
    const openForm=()=>{
        setFormStatus(true)
    }
    const closeForm=()=>{
        setFormStatus(false)
    }
    return (
        <div className="new-expense">
            {
               !FormStatus && (<button onClick={openForm}>Add New Expense</button>) 
            }
            {
                FormStatus && (<ExpenseForm onSubmitExpense={NewExpenseData} onCancel={closeForm}/>)
            }
            
        </div>
    )
}

export default NewExpense;