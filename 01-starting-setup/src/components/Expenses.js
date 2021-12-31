import './Expenses.css';
import ExpenseItem from './ExpenseItem';


function Expenses(props) {

    const expenses = props.expenses;

    return (
        <div className="expenses">
            <table>
                <tbody>
                    <thead> <h2>Expenses Manager</h2></thead>
                    <tr>
                   
                        <td>{expenses.map((expenseItem) =>
                            <ExpenseItem
                                title={expenseItem.title}
                                amount={expenseItem.amount}
                                date={expenseItem.date}
                            />)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Expenses;