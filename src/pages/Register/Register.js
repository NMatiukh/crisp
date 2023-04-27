import React from 'react';
import style from './Register.module.scss';
import {Link} from "react-router-dom";
import {Button, Form, Input, Typography} from "antd";
import {getFirebase} from "react-redux-firebase";

const Register = () => {
    const onFinish = (values) => {
        // dispatch(createUser(values.email, values.password))
        return getFirebase().auth().createUserWithEmailAndPassword(values.email, values.password)
    };
    return (
        <div>
            <Typography.Title>Register</Typography.Title>
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
                Already have an account? <Link to="/login">Sign in</Link>
            </Typography.Text>
        </div>
    );
};

export default Register;