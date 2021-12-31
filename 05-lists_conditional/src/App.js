import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const initialExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Overly Precise Donut',
      amount: 294.677,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e4',
      title: 'Tiny Horse',
      amount: .0123,
      date: new Date(2018, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  function onUpdateExpense(expense){
    if (expense.id === '-1'){
      expense.id='e'+ ((Math.random()*100)+1).toString();
    }
    setExpenses( (prevExpenses ) =>{ return [expense, ...prevExpenses]});
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onUpdateExpense={onUpdateExpense}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;