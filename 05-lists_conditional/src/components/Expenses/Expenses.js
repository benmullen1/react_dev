import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  //initialize with 2021 filter year
  const [filterYear, setFilterYear] = useState('2021');

  const [items, setItems] = useState(props.items);

  function updateFilterHandler(year){
    console.log("now filtering by " + year);
    setFilterYear(year);
    if (year === "all" | !year){
      setItems(props.items);
    }
    else{
      let filteredItems = props.items.filter( expense => expense.date.getFullYear().toString() === year);
      setItems(filteredItems);
    }
  }

  // function onChangeExpense(expense){
  //   items.push(expense);
  //   setItems(items);
  //   updateFilterHandler(filterYear);
  // }

  return (
    <div>      
      <Card className="expenses">
        <ExpensesFilter filterYear={filterYear} onFilterUpdate={updateFilterHandler} />
        <ExpensesList expenses={items}/>
      </Card>
    </div>
  );
}

export default Expenses;
