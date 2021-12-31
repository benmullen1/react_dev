import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import Expense from '../../model/Expense';
import { useState } from 'react';

const NewExpense = (props) => {

  let defaultContent = (<div><button onClick={onClickNewExpense} >New Expense</button></div>)

  const expense = new Expense('', 0, new Date(Date.now()));
  const [visibleContent, setVisibleContent] = useState(defaultContent);

  function onUpdateExpenseHandler(expense){
    props.onUpdateExpense(expense);
  }

  function onClickNewExpense(){
    setVisibleContent(<div><ExpenseForm expense={expense} onUpdateExpense={onUpdateExpenseHandler} onCancelExpense={onClickCancelExpense}/></div>);
  }

  function onClickCancelExpense(){
    setVisibleContent(defaultContent);
  }

  return (
    <div className='new-expense'>{visibleContent}</div>
  );
};

export default NewExpense;
