import React from 'react';
import style from './ProductForm.module.scss';
import {App, Button, Checkbox, Form, Input, InputNumber, Space, Tag, notification} from "antd";
import {options, optionsColor} from "../../pages/Admin/Admin";
import {useDispatch} from "react-redux";
import {createProduct, editProduct} from "../../redux/actions";
import {useNavigate} from "react-router-dom";
import {db} from "../../firebase/firebase";

const ProductForm = ({action, product, form}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const errorMessage = () => {
        notification.error({message: 'Oops...'});
    }
    const infoMessage = () => {
        notification.info({message: 'Failed!'});

    }
    const doneMessage = () => {
        notification.success({message: 'Congratulations!'});
        navigate("/admin/all_products")
    }
    const onFinish = (values) => {

        try {
            action === 'edit' ?
                db
                    .collection('products')
                    .doc(product.id)
                    .update(values) :
                db
                    .collection('products')
                    .add(values)
        } catch (e) {
            errorMessage()
        } finally {
            doneMessage()
        }
    };
    const onFinishFailed = (errorInfo) => {
        infoMessage()
    };
    return (
        <Form
            name={action === 'edit' ? 'editForm' : 'createForm'}
            form={form || null}
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={action === 'edit' ? product : null}
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
            >
                <InputNumber addonAfter={'%'} min={0} max={100}/>
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
                            optionsColor.map((value) => <Checkbox key={value.value + 'form'}
                                                                  value={value.value}>
                                <Tag style={{color: value.value, width: 17, height: 17}}
                                     color={value.value} key={value.value}></Tag>
                            </Checkbox>)
                        }
                    </Space>
                </Checkbox.Group>

            </Form.Item>
            {
                optionsColor.map(image =>
                    <Form.Item
                        name={['images', image.value]}
                        label={<Tag style={{color: image.value, width: 17, height: 17}}
                                    color={image.value} key={image.value}></Tag>}
                        key={['images', image.value]}
                    >
                        <Input addonAfter={'url'}/>
                    </Form.Item>
                )
            }

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

export default ProductForm;