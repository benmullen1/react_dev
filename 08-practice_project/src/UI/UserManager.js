import React, {useState} from 'react';
import styles from './UserManager.module.css';
import Card from './Card';
import UserForm from './UserForm';
import UserItem from './UserItem';

const initial_users = [
    {
      name: "Jim",
      age: 12,
      identifier: 1
    },
    {
      name: "Jam",
      age: 45,
      identifier: 2
    },
    {
      name: "Sam",
      age: 37,
      identifier: 3
    },
  
  ];

const UserManager = (props) => {   

      const [users, setUsers] = useState(initial_users);
      
    function addUserHandler(user){
        setUsers([user, ...users]);
      }

    function handleUserClick(event){
        var userItemTarget = event.target;
        var key = event.key;
        console.log("clicked item " + key);

    }

    return (
        <div className={styles.usermanager} >
      <Card>
        <UserForm addUserHandler={addUserHandler}></UserForm>
      </Card>
      <Card>
        {users.length <= 0 &&

            <div className={styles.userlist__fallback}>No entries</div>
        }
        {users.length > 0 &&
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
            </div>
        }
      </Card>
        </div>

    );

}
export default UserManager;