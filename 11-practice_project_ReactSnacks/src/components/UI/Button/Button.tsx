import React from 'react';

import classes from './Buttons.module.css';

interface ButtonProps{
  type?:any,
  className?:string,
  onClick:any,
  disabled?:boolean,
  children?:any
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
