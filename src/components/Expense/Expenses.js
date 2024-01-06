import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter.js";
import ExpenseList from "./ExpenseList.js"

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("");
  const onFilterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return filterYear === "" ? expense : expense.date.getFullYear().toString().includes(filterYear);
  });

  

  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={onFilterChangeHandler} />
      <ExpenseList items={filteredExpense} year={filterYear}/>
    </Card>
  );
};

export default Expenses;
