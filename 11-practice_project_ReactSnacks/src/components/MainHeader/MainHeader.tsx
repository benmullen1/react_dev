import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes['main-header']}>
      <img src="/images/icons/restaurant.png" alt="React Snacks Logo"/>
      <h1>React Snacks</h1>
      <Navigation className={classes.navigation}/>
    </header>
  );
};

export default MainHeader;
