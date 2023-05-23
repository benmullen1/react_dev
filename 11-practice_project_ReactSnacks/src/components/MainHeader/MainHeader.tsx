import React, { useContext } from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import CartWidget from '../UI/CartWidget/CartWidget';
import CartContext from '../../model/cart-context';

const MainHeader = () => {

  const ctx = useContext(CartContext);

  return (
    <header className={classes['main-header']}>
      <img className={classes['main-header-logo']} src="/images/icons/restaurant.png" alt="React Snacks Logo"/>
      <h1>React Snacks</h1>
      {ctx.cart.items.length >0 &&
        <CartWidget></CartWidget>
      }
      <Navigation className={classes.navigation}/>
      
    </header>
  );
};

export default MainHeader;
