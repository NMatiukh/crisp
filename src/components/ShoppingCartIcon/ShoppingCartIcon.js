import React from 'react';
import style from './ShoppingCartIcon.module.scss';
import {Space, Typography} from "antd";
import {ShoppingOutlined} from "@ant-design/icons";

const ShoppingCartIcon = (props) => {
    return (
        <Space className={style.shoppingCartIcon}>
            <ShoppingOutlined />
            <div className={style.shoppingCartIconContent}>
                <Typography.Text className={style.shoppingCartIconContentTopItem}>Shopping Cart</Typography.Text>
                <Typography.Text className={style.shoppingCartIconContentBottomItem}>{props.eur.toFixed(2)} EUR</Typography.Text>
            </div>
        </Space>
    );
};
ShoppingCartIcon.defaultProps = {
    eur: 0.00,
};

export default ShoppingCartIcon;