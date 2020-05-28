import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Link } from "react-router-dom";
import formSchema from './formSchema';
// import '../components/';


//import Login from "./Login"

///////STYLES//////////




const Register = (props) => {
  

  const [buttonDisabled, setButtonDisabled] = useState(true)
  
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

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);
  
    const validate = e => {
      e.persist();
      yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })

      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
    }

  const Changehandler = (e) => {
    e.persist();
    validate(e)
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    
  };

  const Submitform = (e) => {
    e.preventDefault();
    axios
      .post("https://water-my-plants-four.herokuapp.com/auth/register", formState)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        props.history.push("/");
      });
  };

  return (
    <div className="Register">
    <div className="rWrap">
      <form class="pure-form pure-form-stacked" onSubmit={Submitform}>
        <fieldset>
        <h3>Let's get started!</h3>
        <h4>Create your account</h4>
        <label for="stacked-username">
          Username
        </label>
          <input
          id="input"
          onChange={Changehandler}
            type="text"
            name="username"
            placeholder='Username'
          />
          {errors.username.length > 0 ? (
          <p className="errors">{errors.username}</p>
          ) : null}
        

        <label for="stacked-email">
          Email
        </label>  
          <input
          id="input"
          className="input"
          onChange={Changehandler}
            type="text"
            name="email"
            placeholder="Email"
          />
          {errors.email.length > 0 ? (
          <p className="errors">{errors.email}</p>
          ) : null}
        

        <label for="stacked-password">
          Password
        </label>
          <input 
          id="input"
          onChange={Changehandler}
          type="password"
          name="password"
          placeholder="Password"
          />
          {errors.password.length > 0 ? (
          <p className="errors">{errors.password}</p>
          ) : null}
        
        

        
          <button disabled={buttonDisabled} type="submit">Next</button><br/>
        

        <h4>Already have an Account? Login Here!</h4>

        <Link to="/" id="login">Login</Link>
        </fieldset>
      </form>
      
    </div>
  </div>
  );
};

export default Register;