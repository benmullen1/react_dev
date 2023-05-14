import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import Button from '../Button/Button';
import classes from './Modal.module.css';

interface ModalProps {
  title:string,
  message:string,
  onConfirm:any,
  onCancel?:any
}

interface BackdropProps {
  onCancel:any
}


const Backdrop = (props: BackdropProps) => {
  return (<div className={classes.backdrop} onClick={props.onCancel} />);
}

const Overlay = (props: ModalProps) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Confirm</Button>
        {props.onCancel && <Button onClick={props.onCancel}>Cancel</Button>}
      </footer>
    </Card>
  );
}

const Modal = (props: ModalProps) => {

return (
    <React.Fragment>
      {props.onCancel && ReactDOM.createPortal(<Backdrop onCancel={props.onCancel}></Backdrop>, document.getElementById('backdrop-root') as HTMLFormElement)}
      {!props.onCancel && ReactDOM.createPortal(<Backdrop onCancel={props.onConfirm}></Backdrop>, document.getElementById('backdrop-root') as HTMLFormElement)}
      {ReactDOM.createPortal(<Overlay title={props.title} message={props.message} onConfirm={props.onConfirm} onCancel={props.onCancel}></Overlay>, document.getElementById('overlay-root') as HTMLFormElement)}
    </React.Fragment>
  );
};

export default Modal;
