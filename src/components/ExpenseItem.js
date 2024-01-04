import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails location={props.location} title={props.title} amount={props.amount}/>
    </Card>
  );
}
export default ExpenseItem;