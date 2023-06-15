import React, { useContext, useState } from 'react';
//import Button from '../UI/Button/Button';
import AuthContext from '../../model/auth-context';

import classes from './Navigation.module.css';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Navigation = (props: any, className: string) => {
  const ctx = useContext(AuthContext);



  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("bob@bob");
  const [password, setPassword] = useState("12345");
  const [usernameValid, setUsernameValid] = useState("form-control is-valid");
  const [passwordValid, setPasswordValid] = useState("form-control is-valid");

  function handleLogin() {
    /*
      if not logged in
        and if username and password are valid
          login, close window and clear fields
        but if invalid
          keep window open and flag fields
      if logged in, 
        try to logout
    */
    if (!ctx.isLoggedIn) {
      if (validateUsername() && validatePassword()) {
        setShow(false);
        ctx.login(username, password);
        setUsername("");
        setPassword("");
      }
      else {
        validatePassword();
        validateUsername();
      }
    }
    else {
      setShow(false);
      ctx.logout();
      setUsername("");
      setPassword("");
      //in case they subsequently login afterward
      setUsernameValid("form-control is-valid");
      setPasswordValid("form-control is-valid");
    }
  }

  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setUsernameValid("form-control is-valid");
    setPasswordValid("form-control is-valid");
    setShow(false);
  }

  const handleShow = () => setShow(true);

  function onUpdateUsername(event: any) {
    setUsername(event.target.value);
  }

  function onUpdatePassword(event: any) {
    setPassword(event.target.value);
  }

  function validatePassword() {
    let validity = (password.length > 4);
    if (!validity) setPasswordValid("form-control is-invalid");
    else setPasswordValid("form-control is-valid");
    return validity;
  }

  function validateUsername() {
    let validity = (username.includes('@'));
    if (!validity) setUsernameValid("form-control is-invalid");
    else setUsernameValid("form-control is-valid");
    return validity;
  }

  return (
    <nav className={classes.nav}>


      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Login Management</Modal.Title>
        </Modal.Header>
        {!ctx.isLoggedIn &&
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="loginForm.username">
                <Form.Label>Username/Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                  value={username}
                  onChange={onUpdateUsername}
                  onBlur={validateUsername}
                  className={usernameValid}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="loginForm.Password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={onUpdatePassword}
                  className={passwordValid}
                  onBlur={validatePassword}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
        }
        {ctx.isLoggedIn &&
          <Modal.Body>
            <span>Confirm Logout?</span>
          </Modal.Body>
        }
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            {!ctx.isLoggedIn ? "Login" : "Logout"}
          </Button>
        </Modal.Footer>
      </Modal>



      <Button onClick={handleShow}>{!ctx.isLoggedIn ? "Login" : "Logout"}</Button>

    </nav>
  );
};

export default Navigation;
