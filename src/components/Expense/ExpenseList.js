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
    </ul>
  );
};
export default ExpenseList;
