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
        {props.items.map((item) => (
            <ExpenseItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.location}
            />
        ))}
    </Card>
  );
}

export default Expenses;
