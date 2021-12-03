import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import Expense from '../../model/Expense';

const NewExpense = () => {

  const expense = new Expense('', 0, new Date(Date.now()));

  function onUpdateExpenseHandler(expense){
    console.log(expense.toString());
  }

  return (
    <div className='new-expense'>
      <ExpenseForm expense={expense} onUpdateExpense={onUpdateExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
