import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const [amount,setAmount] = useState(props.amount);

  const updateAmount =()=>{
    setAmount(100);
  }

  const deleteExpense =()=>{
    if(window.confirm(`Delete expense : ${props.title} ?`)){
      let d= document.getElementById(props.id)
      d.remove();
    }
  }
  return (
    <Card className="expense-item" id={props.id}>
        <ExpenseDate date={props.date}/>
        <ExpenseDetails location={props.location} title={props.title} amount={amount}/>
        <div className="btn-group">
        <button className="add-amount" onClick={updateAmount}>Update Amount</button>
        <button className="del-btn" onClick={deleteExpense}>Delete Expense</button>
        </div>

    </Card>
  );
}
export default ExpenseItem;