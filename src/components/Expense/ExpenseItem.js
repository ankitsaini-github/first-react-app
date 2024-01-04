import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails location={props.location} title={props.title} amount={props.amount}/>
    </Card>
  );
}
export default ExpenseItem;