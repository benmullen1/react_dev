import React, { useState, useEffect, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) =>{
  console.log("email action dispatched - " + action.type);
  //action = {type: '', value: ''}
  //state =  {value: '', isValid: true}

  if (action.type === 'USER_INPUT'){
    return {value: action.value, isValid: action.value.includes('@')};
  }

  if (action.type === 'VALIDATE'){
    return {value: state.value, isValid:state.value.includes('@')};
  }
  return {value: '', isValid: false};
}

const passwordReducer = (state, action) => {
  console.log("password action dispatched - " + action.type);
  //action = {type: '', value: ''}
  //state =  {value: '', isValid: true}

  if (action.type === 'USER_INPUT'){
    return {value: action.value, isValid: action.value.trim().length > 6}
  }
  if (action.type === 'VALIDATE'){
    return {value: state.value, isValid:state.value.trim().length > 6};
  }
  return {value: '', isValid: false};

}

const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});


  //Object destructuring for form validity check
  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;
 
  useEffect(()=>{
    console.log("entering useEffect");
    const timer = setTimeout(()=>{
      setFormIsValid(
        emailIsValid && passwordIsValid
      );

    }, 500);
    
    return ()=>{
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailRef = useRef();
  const passwordRef = useRef();


  const emailChangeHandler = (event) => {
    console.log("email changed");
    dispatchEmail({type: 'USER_INPUT', value: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    console.log("password changed");
    dispatchPassword({type: 'USER_INPUT', value: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'VALIDATE'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'VALIDATE'});
  };

  const submitHandler = (event) => {
    console.log("login submitted");
    event.preventDefault();
    if (formIsValid){
      props.onLogin(emailState.value, passwordState.value);
    }
    else if (!emailIsValid){
      emailRef.current.focus();
    }
    else {
      passwordRef.current.focus();
    }
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          id="email"
          type="email" 
          name="Email" 
          value={emailState.value} 
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailIsValid}
          ref={emailRef}
        />
        <Input
          id="password4"
          type="password"
          name="Password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordIsValid}
          ref={passwordRef}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

//pre-Input control format
/*         <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */

export default Login;
