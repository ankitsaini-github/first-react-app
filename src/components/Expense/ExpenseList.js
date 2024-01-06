import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses found in the Year : {props.year}
      </h2>
    );
  }
  
  let totalExpense =''
  if(props.items.length > 1){
    totalExpense= <h3 className="expenses-list__total">
    Total Expenses : {props.items.length}
  </h3>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    {props.items.length===1 && <h2 className="expenses-list__fallback">
             Only single Expense here. Please add more...
         </h2>}
         {totalExpense}
    </ul>
  );
};
export default ExpenseList;
