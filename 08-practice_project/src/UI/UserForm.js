import React, {useState} from 'react';
import User from '../model/User';
import styles from './UserForm.module.css';
import Button from './Button';
import Modal from './Modal';

const UserForm = (props) => {

    let innerUser = new User();
    const [user, setUser] = useState(innerUser);

    const [error, setError] = useState();

    // const classes = styles.card + props.className;
    function clickHander(event){
        event.preventDefault();

        //tests for nulls,
        //tests for empty strings
        //tests for age being numeric and greater than 0
        if (user.name && user.age && user.identifier && user.name.trim().length > 0 && user.age.trim().length > 0 && +user.age > 0){
            console.log("Adding User: " + user.toString());
            props.addUserHandler(user);
            setUser(new User());
        } else{
            console.log("Could not insert Invalid User: " + user.toString());
            setError({
                title: "Invalid User",
                message: "Could not insert Invalid User: " + user.toString()
            })
            return {
                
            };
        }
    }

    function nameChangeHandler(event){
        let newUser = {...user}
        newUser.name = event.target.value;
        setUser(newUser);
    }

    function ageChangeHandler(event){
        let newUser = {...user}
        newUser.age = event.target.value;
        setUser(newUser);
    }

    function errorModalHandler(){
        setError(null);
    }



    return (
        <React.Fragment>
            {error && <Modal title={error.title} message={error.message} onClick={errorModalHandler}></Modal>}
            <div className={styles.userform} >
                <form>
                    <div className={styles.labelgroup}>
                        <label className={styles.label} htmlFor="user_name_input">Name</label>
                        <input
                            type="text"
                            id="user_name_input" 
                            className={styles.input}
                            value={user.name}
                            onChange={nameChangeHandler}
                            key={user.identifier}
                        >
                        </input>
                    </div>

                    <div className={styles.labelgroup}>
                        <label className={styles.label} htmlFor="user_age_input">Age</label>
                        <input
                            id="user_age_input" 
                            className={styles.input}
                            value={user.age}
                            onChange = {ageChangeHandler}
                            key={user.identifier}
                            type="number"
                        >    
                        </input>
                    </div>

                    <div className={styles.labelgroup}>
                        <label className={styles.label} htmlFor="user_id_display">Identifier</label>
                        <input
                            id="user_id_display" 
                            className={styles.input}
                            value={user.identifier}
                            key={user.identifier}
                            disabled
                        >    
                        </input>
                    </div>
                    <Button onClick={clickHander} >Add User</Button>
                </form>
            </div>
        </React.Fragment>

    );
}

export default UserForm;