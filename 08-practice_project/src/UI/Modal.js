import React from "react";
import react from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css"

const  Modal = (props) => {

    function dismissModal(){
        props.onClick();
    }

    return (
        <React.Fragment>
            <div className={styles.backdrop} onClick={dismissModal}></div>
            <Card className={styles.modal}>
                <header className={styles.header}> 
                    <h2>{props.title || 'Alert!'}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={dismissModal}>Dismiss</Button>
                </footer>
            </Card>
        </React.Fragment>
    );
}

export default Modal;