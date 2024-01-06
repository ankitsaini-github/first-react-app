import { useState } from "react";

import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter.js";

const Expenses = (props) => {
  const [filterYear,setFilterYear]=useState('2020');
  const onFilterChangeHandler =(selectedYear)=>{
    setFilterYear(selectedYear);
  };
  return (
    <Card className="expenses">
        <ExpenseFilter selected={filterYear} onChangeFilter={onFilterChangeHandler}/>
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
    </Card>
  );
}

export default Expenses;
