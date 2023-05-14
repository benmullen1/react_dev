import React from 'react';

import classes from './Footer.module.css';

interface FooterProps{
    loginHandler:any
}

const Footer = (props:FooterProps) => {
  return (
    <footer className={classes['main-header']}>
      <img src="/images/icons/restaurant.png" alt="React Snacks Logo"/>
      <h1>React Snacks.. they're good</h1>     
      
    </footer>
  );
};

export default Footer;
