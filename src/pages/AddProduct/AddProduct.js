import React from 'react';
import style from './AddProduct.module.scss';
import {Button, Checkbox, Form, Input, InputNumber, Space, Tag} from "antd";
import SizeCheckbox from "../../components/SizeCheckbox/SizeCheckbox";
import {useDispatch} from "react-redux";
import {createProduct} from "../../redux/actions";
import {options, optionsColor} from "../Admin/Admin";


const AddProduct = () => {
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(createProduct(values))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="addProduct"
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
                label="name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="size"
                name="size"
                rules={[
                    {
                        required: true,
                        message: 'Please input your size!',
                    },
                ]}
            >
                <Checkbox.Group>
                    <Space wrap={true}>
                        {
                            options.map((value) => <Checkbox key={value.value} value={value.value}>
                                {value.label}
                            </Checkbox>)
                        }
                    </Space>
                </Checkbox.Group>
            </Form.Item>

            <Form.Item
                label="color"
                name="color"
                rules={[
                    {
                        required: true,
                        message: 'Please input your color!',
                    },
                ]}
            >
                <Checkbox.Group>
                    <Space wrap={true}>
                        {
                            optionsColor.map((value) => <Checkbox key={value.value}
                                                                  value={value.value}>
                                <Tag style={{color: value.value, width: 80}} color={value.value} key={value.value}>{value.value}</Tag>
                            </Checkbox>)
                        }
                    </Space>
                </Checkbox.Group>

            </Form.Item>

            <Form.Item
                label="price"
                name="price"
                rules={[
                    {
                        required: true,
                        message: 'Please input your price!',
                    },
                ]}
            >
                <InputNumber addonAfter={'$'} min={0}/>
            </Form.Item>
            <Form.Item
                label="sale"
                name="sale"
                rules={[
                    {
                        required: true,
                        message: 'Please input your sale!',
                    },
                ]}
                initialValue={0}
            >
                <InputNumber addonAfter={'%'} min={0} max={100}/>
            </Form.Item>
            <Form.Item
                label="image"
                name="image"
                rules={[
                    {
                        required: true,
                        message: 'Please input your image!',
                    },
                ]}
            >
                <Input addonAfter={'url'}/>
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
    );
};

export default AddProduct;