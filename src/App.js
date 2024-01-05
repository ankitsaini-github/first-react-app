import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const InitialExpensesArr = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Mumbai",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12),location: "Pune", },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Delhi",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Bangalore",
    },
  ];
  
  const [ExpenseArray,SetExpenseArray]=useState(InitialExpensesArr);

  const AddExpenseHandler=(NewExpenseData)=>{
    console.log(NewExpenseData);
    SetExpenseArray([...ExpenseArray,NewExpenseData]);
  };
  return (
    <div>
      <h2>EXPENSE TRACKER (REACT APP)</h2>
      <NewExpense onAddNewExpense={AddExpenseHandler}/>
      <Expenses items={ExpenseArray} />
    </div>
  );
}

export default App;
