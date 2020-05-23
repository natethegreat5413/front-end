import React, { useState } from "react";
import axios from "axios";
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
      .post("http://localhost:5000/api/login", account)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        props.history.push("/plants");
      })
      .catch((err) => {
        console.log(err);
        props.history.push("/");
      });
  };
  return (
    <div>
      <form className='form' onSubmit={Submitform}>
hi there
      </form>
    </div>
  );
};

export default Login;