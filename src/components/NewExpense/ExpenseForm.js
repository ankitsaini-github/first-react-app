import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredLocation, setEnteredLocation] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  const UpdateTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const UpdateAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const UpdateLocationHandler = (e) => {
    setEnteredLocation(e.target.value);
  };

  const UpdateDateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e)=>{
    e.preventDefault();
    const ExpenseData={
        title: EnteredTitle,
        amount: EnteredAmount,
        location: EnteredLocation,
        date: new Date(EnteredDate),
    }
    console.log(ExpenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={UpdateTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={UpdateAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input type="text" onChange={UpdateLocationHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-01-01"
            onChange={UpdateDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
