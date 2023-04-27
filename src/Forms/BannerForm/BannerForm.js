import React from 'react';
import style from './BannerForm.module.scss';
import {Button, Checkbox, Form, Input, InputNumber, notification, Space, Tag} from "antd";
import {options, optionsColor} from "../../pages/Admin/Admin";
import {useNavigate} from "react-router-dom";
import {db} from "../../firebase/firebase";

const BannerForm = ({action, form, banner}) => {
    const navigate = useNavigate();

    const errorMessage = () => {
        notification.error({message: 'Oops...'});
    }
    const infoMessage = () => {
        notification.info({message: 'Failed!'});

    }
    const doneMessage = () => {
        notification.success({message: 'Congratulations!'});
        navigate("/admin/all_banners")
    }
    const onFinish = (values) => {

        try {
            action === 'edit' ?
                db
                    .collection('banners')
                    .doc(banner.id)
                    .update(values) :
                db
                    .collection('banners')
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
            initialValues={action === 'edit' ? banner : null}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="url"
                name="url"
                rules={[
                    {
                        required: true,
                        message: 'Please input your url!',
                    },
                ]}
            >
                <Input/>
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

export default BannerForm;