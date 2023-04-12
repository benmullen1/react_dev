import React from 'react';
import Button from './Button';
import styles from './UserItem.module.css';

const UserItem = (props) => {

    return (
        <div className={styles.useritem} >
            <table  className={styles.useritemtable}>
                <tbody>
                    <tr>
                    <td className={styles.useritemlabel}>Name</td>
                    <td className={styles.useritemvalue}>{props.name}</td>
                    </tr>
                    <tr>
                    <td className={styles.useritemlabel}>Age</td>
                    <td className={styles.useritemvalue}>{props.age}</td>
                    </tr>
                    <tr>
                    <td className={styles.useritemlabel}>Identifer</td>
                    <td className={styles.useritemvalue}>{props.identifier}</td>
                    <td><Button onClick={props.handleClick}>Delete Item</Button></td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default UserItem;