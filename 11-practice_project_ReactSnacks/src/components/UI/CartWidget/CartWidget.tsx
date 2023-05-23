import React, { useContext } from 'react';

import classes from './CartWidget.module.css';
import CartContext from '../../../model/cart-context';
import CartItemModel from '../../../model/CartItemModel';

const CartWidget = () => {

  const ctx = useContext(CartContext);

  function checkoutHandler(){
    console.log("Checking out");
    ctx.resetCart();
  }

  function countCartItems(){
    let numItems:number = 0;
    ctx.cart.items.forEach((item:CartItemModel)=>{
      numItems += item.amount;
    } );
    if (numItems>0) {
      return numItems;
    } else{
      return "";
    }
  }

  return (
    <div className={classes.cart}>
      <img className={classes['icon']} onClick={checkoutHandler} title='Checkout' src={'/images/icons/shopping-cart_thin.png'} alt="Checkout"></img>
      <div className={classes.total}>{countCartItems()}</div>
    </div>
  );
};

export default CartWidget;
