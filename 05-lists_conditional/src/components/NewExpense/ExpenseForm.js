import React, { useState } from 'react';
import Expense from '../../model/Expense';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState(props.expense.title);
  const [amount, setAmount] = useState(props.expense.amount);
  const [date, setDate] = useState(new Date(props.expense.date));
  const id = props.expense.id;
  const updateExpense = props.onUpdateExpense;
  const cancelExpense = props.onCancelExpense;
  

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);  
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  function submitHandler(event){
    event.preventDefault();
    let newAmount = Number.parseFloat(amount);
    let newDate = new Date(date);
    let expense = new Expense(title, newAmount, newDate);
    expense.id = id;
    console.log(expense.toString());
    updateExpense(expense);
    cancelExpense();
  }

  function onClickCancelHandler(event){
    event.preventDefault();
    cancelExpense();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type='text' 
            onChange={titleChangeHandler} 
            value={title}
            key={id} 
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={amount}
            key={id}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            value={date}
            key={id}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={onClickCancelHandler}>Cancel</button>
        <button type='submit' >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
