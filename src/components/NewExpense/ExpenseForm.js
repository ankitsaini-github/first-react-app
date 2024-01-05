import "./ExpenseForm.css";

const ExpenseForm = () => {
    const consoleLogHandler = (e)=>{
        console.log(e.target.value);
    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={consoleLogHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={consoleLogHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input type="text" onChange={consoleLogHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2025-01-01" onChange={consoleLogHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
