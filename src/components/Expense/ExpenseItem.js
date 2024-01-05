import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem = (props) => {
  const deleteExpense =()=>{
    alert(props.title)
  }
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails location={props.location} title={props.title} amount={props.amount}/>
        <button className="del-btn" onClick={deleteExpense}>Delete Expense</button>
    </Card>
  );
}
export default ExpenseItem;