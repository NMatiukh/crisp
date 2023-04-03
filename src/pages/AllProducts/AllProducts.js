import React, {useState} from 'react';
import style from './AllProducts.module.scss';
import {
    Button,
    Checkbox,
    Col,
    DatePicker, Divider,
    Drawer,
    Form,
    Image,
    Input,
    InputNumber,
    Row,
    Select,
    Space,
    Table,
    Tag
} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {createProduct, deleteProduct, editProduct} from "../../redux/actions";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {options, optionsColor} from "../Admin/Admin";
import {useForm} from "antd/es/form/Form";

const AllProducts = () => {
    const products = useSelector(store => store.products.data)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [activeElement, setActiveElement] = useState(null);
    const [form] = Form.useForm()

    const onFinish = (values) => {
        dispatch(editProduct({...values, ...{id: activeElement.id}}))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const showDrawer = (value) => {
        setActiveElement(value)
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (url) => <Image src={url} width={50}/>
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
            render: (tags) => (
                <Space wrap={true}>
                    {tags.map((value) => {
                        return (
                            <Tag style={{color: value, width: 80}} color={value} key={value}>{value}</Tag>
                        );
                    })}
                </Space>
            ),

        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
            render: (tags) => (
                <Space wrap={true}>
                    {tags.map((tag) => {
                        return (
                            <Tag key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </Space>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (value) => (
                <Space size="middle">
                    <Button icon={<EditOutlined/>} onClick={() => showDrawer(value)}>Edit</Button>
                    <Divider type={"vertical"}/>
                    <Button icon={<DeleteOutlined/>} onClick={() => dispatch(deleteProduct(value))}
                            danger>Delete</Button>
                </Space>
            ),
        },
    ]

    // const data = products.map(value => {
    //     return {
    //         title: value.name,
    //         dataIndex: 'name',
    //         key: 'name',
    //         render: (text) => <a>{text}</a>,
    //     }
    // })
    return (
        <>
            <Table  columns={columns} dataSource={products} pagination={{
                current: 1,
                pageSize: 10,
            }} rowKey={(value)=>value.id}/>
            <Drawer
                title={`Edit`}
                destroyOnClose={true}
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{
                    paddingBottom: 80,
                }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={() => {form.submit(); onClose()}} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form
                    layout="vertical"
                    name="editProduct"
                    initialValues={activeElement}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                >
                    <Row gutter={16}>
                        <Col span={12}>
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
                        </Col>
                        <Col span={12}>
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
                        </Col>

                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
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
                        </Col>
                        <Col span={12}>
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
                        </Col>

                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
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
                        </Col>
                        <Col span={12}>
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
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>


    );
};

export default AllProducts;