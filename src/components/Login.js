import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jwtdecode from 'jwt-decode';
import '../styles/Login.css'
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


//// LOGIN FUNCTION ////
const Login = (props) => {

  //// SUBMIT HANDLER ////
  const onSubmit = (values) => {

    axios
      .post("https://plantwatering.herokuapp.com/auth/login", values)
      .then((response) => {
        console.log(jwtdecode(response.data.token));
        let decodedtoken = jwtdecode(response.data.token)
        localStorage.setItem("token", response.data.token);
        localStorage.setItem('id', decodedtoken.id)
        props.history.push("/PlantsList");
      })
      .catch((err) => {
        console.log(err);
        props.history.push("/");
      });
  };
  
  return (
  <div className='Login'>
    <Card title="Login" className='login-card'>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/Register">register now!</Link>
        </Form.Item>
      </Form>
    </Card>
    </div>
  );
};

export default Login;