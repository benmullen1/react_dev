import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './LoginModal.module.css';
import Login from './Login';
import AuthContext from '../../model/auth-context';

interface ModalProps {
  title:string,
  message:string,
  onConfirm:any,
  onCancel:any,
}

interface BackdropProps {
  onCancel:any
}


const Backdrop = (props: BackdropProps) => {
  return (<div className={classes.backdrop} onClick={props.onCancel} />);
}

const Overlay = (props: ModalProps) => {

  function confirmLogin(event:Event){
    event.preventDefault();
    props.onConfirm();
  }

  return (
    <Card className={classes.modal}>
      {console.log("Opening Login Modal Window")}
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>

      <Login onLogin={(event:Event)=>{confirmLogin(event)}}></Login>

      <footer className={classes.actions}>
        {props.onCancel && <Button onClick={props.onCancel}>Cancel</Button>}
      </footer>
    </Card>
  );
}

const LoginModal = (props: ModalProps) => {

  const ctx = useContext(AuthContext);

return (
    <React.Fragment>

      {console.log("Rendering Login Modal Window and Overlay")}
      {(props.onCancel && !ctx.isLoggedIn) && ReactDOM.createPortal(<Backdrop onCancel={props.onCancel}></Backdrop>, document.getElementById('backdrop-root') as HTMLFormElement)}
      {(!props.onCancel && !ctx.isLoggedIn) && ReactDOM.createPortal(<Backdrop onCancel={props.onConfirm}></Backdrop>, document.getElementById('backdrop-root') as HTMLFormElement)}
      {ReactDOM.createPortal(<Overlay title={props.title} message={props.message} onConfirm={props.onConfirm} onCancel={props.onCancel}></Overlay>, document.getElementById('overlay-root') as HTMLFormElement)}
    </React.Fragment>
  );
};

export default LoginModal;
