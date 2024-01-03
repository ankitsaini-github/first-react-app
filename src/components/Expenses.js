import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "./Card.js";
function Expenses(props) {
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
