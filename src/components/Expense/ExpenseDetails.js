import "./ExpenseDetails.css";
const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <div className="expense-item__location">{props.location}</div>
      <h2>{props.title}</h2>
      <div className="expense-item__price">Rs. {props.amount}</div>
    </div>
  );
}
export default ExpenseDetails;
