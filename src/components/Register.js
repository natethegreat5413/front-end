import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  Form,
  Input,
  Tooltip,
  Button,
  AutoComplete,
} from 'antd';
import '../styles/Register.css'
import { QuestionCircleOutlined } from '@ant-design/icons';
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = (props) => {
  
  const [form] = Form.useForm();

  const onSubmit = (values) => {

    axios
      .post("https://plantwatering.herokuapp.com/auth/register", values)
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
    <div className='Register'>
      <Card title="Register" className='register-card'>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onSubmit}
          scrollToFirstError
          className='register-form'
        >
          <Form.Item
            name="username"
            
            label={
              <span>
                Username&nbsp;
                <Tooltip title="What do you want your username to be?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[
              {
                required: true,
                message: 'Please input your username!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="register-button">
              Register
            </Button>
            Already have an account? <Link to="/">Login here!</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;