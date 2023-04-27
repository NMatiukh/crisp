import React from 'react';
import style from './Login.module.scss';
import {Button, Form, Input, Typography} from "antd";
import {Link} from "react-router-dom";
import {getFirebase} from "react-redux-firebase";

const Login = () => {
    const onFinish = (values) => {
        getFirebase().auth().signInWithEmailAndPassword(values.email, values.password)
    };
    return (
        <div>
            <Typography.Title>Login</Typography.Title>
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
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Typography.Text>
                Or <Link to="/register">register</Link>
            </Typography.Text>
        </div>
    );
};

export default Login;