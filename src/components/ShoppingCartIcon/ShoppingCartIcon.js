import React from 'react';
import style from './ShoppingCartIcon.module.scss';
import {Space, Typography} from "antd";
import {ShoppingOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";

const ShoppingCartIcon = (props) => {
    const shopData = useSelector(state => state.shopItems.data)

    return (
        <Space className={style.shoppingCartIcon}>
            <ShoppingOutlined/>
            <div className={style.shoppingCartIconContent}>
                <span> {!shopData.length ? 'Shopping Cart': `${shopData.length} item(s)` }</span>
                <span>{shopData.reduce((a, b) => a + b.price, 0).toFixed(2)} EUR</span>
            </div>
        </Space>
    );
};
ShoppingCartIcon.defaultProps = {
    eur: 0.00,
};

export default ShoppingCartIcon;