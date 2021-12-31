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

  let zeroedAmount = props.amount;
  if (!zeroedAmount){
    zeroedAmount = '0.00'
  }
  else{
    // Create our number formatter. Thanks to https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    zeroedAmount = formatter.format(zeroedAmount);

  }

  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__row'>
        <Title title={title} />
        <div className='expense-item__price'>{zeroedAmount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>      
    </Card>
    </li>
  );
}

export default ExpenseItem;
