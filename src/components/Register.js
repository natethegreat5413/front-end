import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup"
import { Link } from "react-router-dom"
import Login from "./Login"

// const formSchema = yup.object().shape({
//   username: yup.string().required("Must put Username"),
//   email: yup.string().required("Must have valid Email"),
//   password: yup.string().required("Must have Password")
// })

const Register = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
});

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputChange = e => {
    e.persist();
  }

  return (
    <div>
      <form className='form'>
        <h3>Let's get started!</h3>
        <h4>Create your account</h4>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            placeholder='Username'
          />
        </label><br/>

        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            placeholder="Email"
          />
        </label><br/>

        <label htmlFor="password">
          Password
          <input
          type="password"
          name="password"
          placeholder="Password"
          />
        </label><br/>

        <button>Next</button><br/>

        <h4>Already have an Account? Login Here!</h4>

        <Link to="/">Login</Link>
      </form>
    </div>
  );
};

export default Register;