import './ExpenseDate.css';

function ExpenseDate(props) {

    const expenseMonth = props.date.toLocaleString("en-US", { month: 'long' });
    const expenseDay = props.date.toLocaleString("en-US", { day: 'numeric' });
    const expenseYear = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{expenseMonth}</div>
            <div className="expense-date__year">{expenseYear}</div>
            <div className="expense-date__day">{expenseDay} </div>
        </div>
    );

}
export default ExpenseDate;