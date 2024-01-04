import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/Card.js";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
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
