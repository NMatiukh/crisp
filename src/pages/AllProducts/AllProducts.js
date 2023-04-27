import React, {useEffect, useState} from 'react';
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
import {createProduct, deleteProduct, editProduct, getProducts} from "../../redux/actions";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {options, optionsColor} from "../Admin/Admin";
import {useForm} from "antd/es/form/Form";
import ProductForm from "../../Forms/ProductForm/ProductForm";
import {Link} from "react-router-dom";
import {db} from "../../firebase/firebase";

const AllProducts = () => {

    const [open, setOpen] = useState(false);
    const [activeElement, setActiveElement] = useState(null);
    const [form] = Form.useForm()
    const products = useSelector((state) => state.firestore.ordered.products);
    const dispatch = useDispatch()
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
            dataIndex: 'images',
            key: 'images',
            render: (url) => <Image src={url['#2B9FA7']} width={100}/>
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
                            <Tag style={{color: value, width: 17, height: 17}} color={value} key={value}></Tag>
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
                    <Link to={`${value.id}`}>
                        <Button icon={<EditOutlined/>}>Edit</Button>
                    </Link>
                    <Divider type={"vertical"}/>
                    <Button icon={<DeleteOutlined/>} onClick={() =>
                        db
                            .collection('products')
                            .doc(value.id)
                            .delete()
                    }
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
            <Table rowKey={(value) => value.id} columns={columns} dataSource={products}/>
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
                        <Button onClick={() => {
                            form.submit();
                            onClose()
                        }} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
            </Drawer>
        </>


    );
};

export default AllProducts;