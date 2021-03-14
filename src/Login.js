import React, { useState,useEffect } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const history = useHistory();
  const [loggedinuser, setloggedinuser] = useState('')
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [passwordError, setUserPasswordError] = useState("");
  const [emailError, setEmailError] = useState("")
  const [hasAccount, setHasAccount] = useState(true)

console.log(hasAccount);
  const clearInputs = () => {
    setUserEmail('');
    setUserPassword('')
  }
  const clearErrors = () => {
    setEmailError('');
    setUserPasswordError('');
  }
  const loginuser = (event) => {
    clearErrors()
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(useremail, userpassword)
      .then((e) => {
        history.push("/");
      })
      .catch((err => {
        switch(err.code){
        case 'auth/invalid-email':
        case 'auth/user-not-found':
          case'auth/user-disabled':
          setEmailError(err.message);
          break;
          case'auth/wrong-password':
          setUserPasswordError (err.message)
          break;
      }; } ))
  };
  const signupuser = (event) => {
    clearErrors();;
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(useremail, userpassword)
      .then((e) => {
        history.push("/");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
          case "auth/user-disabled":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setUserPasswordError(err.message);
            break;
        }
      });
  };
  const authListener = () => {
     auth.onAuthStateChanged((userauth) => {
       console.log(userauth);
       if (userauth) {
         clearInputs()
         setloggedinuser(userauth)
       } else {
         clearInputs();
          setloggedinuser('');
       }
     });
  }
  useEffect(() => {
    authListener();
  }, [])
  return (
    <div className="Login">
      <Link to='/'>
        <img src="/img/logo.png" className="Login__logo" alt="" />
      </Link>
      <div className="login__container">
        {hasAccount ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
        <form>
          <h5>E-mail</h5>
          <input
            value={useremail}
            onChange={(event) => setUserEmail(event.target.value)}
            type="Email"
          />
          <p className="errorMsg">{emailError}</p>
          <h5>Password</h5>
          <input
            value={userpassword}
            onChange={(event) => setUserPassword(event.target.value)}
            type="password"
          />
          <p className="errorMsg">{passwordError}</p>
          {hasAccount ? (
            <>
              <button
                onClick={loginuser}
                type="submit"
                className="Login__signInButton"
              >
                Sign In
              </button>
              <p>
                Don't have an account ?
                <button
                  className="btn btn-link"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                Sign Up
                </button>
              </p>
            </>
          ) : (
            <>
              <p>
                Have an account ?
                <button
                  className="btn btn-link"
                  onClick={() => setHasAccount(hasAccount)}
                >
                 Sign In
                </button>
              </p>
              <p>By signing-In, you agree to foodtribe's terms and condition</p>
              <button onClick={signupuser} className="login_createAccount">
                Create Foodtribe account
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
