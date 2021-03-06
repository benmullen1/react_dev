import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Title from '../UI/Title';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__row'>
        <Title title={title} />
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
      
    </Card>
  );
}

export default ExpenseItem;
