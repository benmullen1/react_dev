import React, {useContext, useState} from 'react';
import Button from '../UI/Button/Button';
import AuthContext from '../../model/auth-context';
import Modal from '../UI/Modal/Modal';
import classes from './Navigation.module.css';
import LoginModal from '../LoginModal/LoginModal';

const Navigation = (props:any, className:string) => {
  const ctx = useContext(AuthContext);

  const [showLogout, setShowLogout] = useState(false);
  const [showLogin, setShowLogin] = useState(false);


function initiateLogout(){
  setShowLogout(true);
}

function confirmLogout(){
    console.log("user logged out");
    setShowLogout(false);
    ctx.onLogOut();
}

function cancelLogout(){
    console.log("user remained logged in");
    setShowLogout(false);
}

function initiateLogin(){
  setShowLogin(true);
}

function confirmLogin(){
  setShowLogin(false);
  ctx.isLoggedIn = true;
}

function cancelLogin(){
  setShowLogin(false);
}


  return (
    <nav className={classes.nav}>
      {showLogout && (<Modal 
        title="Logout Confirmation" 
        message="Are you sure you want to log out of React Snacks?"
        onConfirm={confirmLogout}
        onCancel={cancelLogout}></Modal>)}
      {showLogin && (<LoginModal
        title="Login to React Snacks" 
        message="Please Enter your username and password"
        onConfirm={confirmLogin}
        onCancel={cancelLogin}></LoginModal>)}
      <ul>
        {!ctx.isLoggedIn && (
          <li>
            <a href="/" onClick={initiateLogin}>Login</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Menu</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Hours and Location</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <Button onClick={initiateLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
