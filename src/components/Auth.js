import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  login, logout } from "../features/authSlice";
import classes from "./Auth.module.css";

const Auth = () => {
  const { isLoggedIn }  = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(login());
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  console.log(isLoggedIn)

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
         
          {isLoggedIn ?  <button onClick={logoutHandler}>Logout</button> : <button onClick={loginHandler}>Login</button>}      
          
        </form>
      </section>
    </main>
  );
};

export default Auth;
