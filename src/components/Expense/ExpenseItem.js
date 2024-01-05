import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {

  const deleteExpense =()=>{

    if(window.confirm(`Delete expense : ${props.title} ?`)){
      let d= document.getElementById(props.id)
      d.remove();
    }
  }
  return (
    <Card className="expense-item" id={props.id}>
        <ExpenseDate date={props.date}/>
        <ExpenseDetails location={props.location} title={props.title} amount={props.amount}/>
        <button className="del-btn" onClick={deleteExpense}>Delete Expense</button>
    </Card>
  );
}
export default ExpenseItem;