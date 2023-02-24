import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { createBrowserHistory } from 'history';
import  '../Login/indexStyle.css';
import {login} from '../../api/api';
const history = createBrowserHistory();
const onFinish = (values) => {
    //登录校验
    const userInfo = login(values);
    localStorage.setItem("username",userInfo.username);
    localStorage.setItem("id",userInfo.id);
    localStorage.setItem("authority",userInfo.authority);
    localStorage.setItem("name",userInfo.name);
    history.push('/home/shouye',userInfo);
    history.go();
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  <div className='loginBg'>
    <div className='opBg'></div>
    <div className='titles'>汽车养护系统</div>
    <div className='inputStyle'>
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="用户名"
      name="username"
      rules={[
        {
          required: true,
          message: '请输入用户名!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="用户密码"
      name="password"
      rules={[
        {
          required: true,
          message: '请输入密码!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>记住密码</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        登录
      </Button>
    </Form.Item>
  </Form>
    </div>
  </div>
);
export default Login;