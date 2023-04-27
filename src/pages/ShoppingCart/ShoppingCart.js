import React from 'react';
import style from './ShoppingCart.module.scss';
import {Button, Col, Divider, Image, InputNumber, Row, Space, Table, Tag, Typography} from "antd";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {deleteProduct} from "../../redux/actions";

const ShoppingCart = () => {
    const shopData = useSelector(state => state.shopItems.data)
    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <Image src={image} width={100}/>
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
            render: (price, obj) => {
                return price * obj.quantity
            },
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
            render: (color) => (
                <Tag style={{color: color, width: 17, height: 17}} color={color} key={color}></Tag>
            ),

        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (quantity) => (
                <InputNumber defaultValue={quantity}/>
            ),

        },
        // {
        //     title: 'Actions',
        //     key: 'actions',
        //     render: (value) => (
        //         <Space size="middle">
        //             <Link to={`${value.id}`}>
        //                 <Button icon={<EditOutlined/>}>Edit</Button>
        //             </Link>
        //             <Divider type={"vertical"}/>
        //             <Button icon={<DeleteOutlined/>} onClick={() => dispatch(deleteProduct(value))}
        //                     danger>Delete</Button>
        //         </Space>
        //     ),
        // },
    ]

    return (
        <div>
            <Row justify={"center"}>
                <Typography.Title>Shopping Cart</Typography.Title>
            </Row>
            <Row justify={"space-around"}>
                <Col span={12}>
                    <Table rowKey={(value) => value.id} columns={columns} dataSource={shopData}/>
                </Col>
                <Col span={6}>

                </Col>
            </Row>
        </div>
    );
};

export default ShoppingCart;