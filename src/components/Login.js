import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [account, setaccount] = useState({
    username: "",
    password: "",
  });
  const Changehandler = (e) => {
    setaccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  const Submitform = (e) => {
    e.preventDefault();
    axios
      .post("https://water-my-plants-four.herokuapp.com/auth/login", account)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        props.history.push("/PlantsList");
      })
      .catch((err) => {
        console.log(err);
        props.history.push("/");
      });
  };
  
  return (
    <div>
      <form className='form' onSubmit={Submitform}>
        <h3>Welcome back!</h3>
        <h4>Log into your account</h4>
        <label htmlFor="username">
          Username
          <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={Changehandler}
          />
        </label><br/>

        <label htmlFor="password">
          Password
          <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={Changehandler}
          />
        </label>

        <button type="submit">Next</button>

        <h4>Not registered yet?  Register Now!</h4>

        <Link to="/Register">Register</Link>
      </form>
    </div>
  );
};

export default Login;