import React, {useState} from 'react';
import styles from './UserList.module.css';
import UserItem from './UserItem';



const UserList = (props) => {

    const [users, setUsers] = useState(props.users);

    if (users.length <= 0){
        return (
            <div className={styles.userlist__fallback}>No entries</div>
        );
    }

    function updateList(event){
        console.log("updating list manually")
        setUsers(props.users);
    }

    function handleUserClick(event){
        var userItemTarget = event.target;
        var key = event.key;
        console.log("clicked item " + key);

    }
   
    return (
        <div className={styles.userlist} >
        <ul>
        {users.map((user) => (
            <UserItem
            key={user.identifier}
            identifier={user.identifier}
            name={user.name}
            age={user.age}
            handleClick={handleUserClick}
            />
        ))}
        </ul>
        <button onClick={updateList}> Update List</button>
        </div>

    );
}

export default UserList;