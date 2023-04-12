import React from 'react';
import style from './ShoppingCart.module.scss';
import {Col, Row, Typography} from "antd";
import {useSelector} from "react-redux";

const ShoppingCart = () => {
    return (
        <div>
            <Row justify={"center"}>
                <Typography.Title>Shopping Cart</Typography.Title>
            </Row>
            <Row justify={"space-around"}>
                <Col span={12}>

                </Col>
                <Col span={6}>

                </Col>
            </Row>
        </div>
    );
};

export default ShoppingCart;