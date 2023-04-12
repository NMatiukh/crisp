import React, {useEffect, useState} from 'react';
import style from './Admin.module.scss';
import {Col, Menu, Row} from "antd";
import {MailOutlined, SkinOutlined} from "@ant-design/icons";
import AllProducts from "../AllProducts/AllProducts";
import AddProduct from "../AddProduct/AddProduct";
import {Link, Outlet, useLocation, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/actions";
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem("Products", 'products',<SkinOutlined />, [
        getItem(<Link to={'all_products'}>Products</Link>, 'all_products', null),
        getItem(<Link to={'add_product'}>Add product</Link>, 'add_product', null, null, null),
    ])
];
export const options = [
    {
        label: 'osfa',
        value: 'osfa',
    },
    {
        label: 'w26',
        value: 'w26',
    },
    {
        label: 'w27',
        value: 'w27',
    },
    {
        label: 'w28',
        value: 'w28',
    },
    {
        label: 'w29',
        value: 'w29',
    },
    {
        label: 'w30',
        value: 'w30',
    },
    {
        label: 'w31',
        value: 'w31',
    },
    {
        label: 'w32',
        value: 'w32',
    },
    {
        label: 'w33',
        value: 'w33',
    },
    {
        label: 'w34',
        value: 'w34',
    },
    {
        label: 'w35',
        value: 'w35',
    },
    {
        label: 'w36',
        value: 'w36',
    },
    {
        label: 'w38',
        value: 'w38',
    },
    {
        label: 'w40',
        value: 'w40',
    }, {
        label: 'w42',
        value: 'w42',
    },
    {
        label: 'w44',
        value: 'w44',
    },
    {
        label: 'w46',
        value: 'w46',
    },
    {
        label: 'w48',
        value: 'w48',
    },
    {
        label: 'w50',
        value: 'w50',
    },
    {
        label: 'w52',
        value: 'w52',
    },
];
export const optionsColor = [
    {
        label: 'color1',
        value: '#292A2D',
    },
    {
        label: 'color2',
        value: '#F3ECE2',
    },
    {
        label: 'color3',
        value: '#24426A',
    },
    {
        label: 'w28',
        value: '#18574A',
    },
    {
        label: 'w29',
        value: '#666689',
    },
    {
        label: 'w30',
        value: '#C2BEB6',
    },
    {
        label: 'w31',
        value: '#AAABA7',
    },
    {
        label: 'w32',
        value: '#971E34',
    },
    {
        label: 'w33',
        value: '#CBA13E',
    },
    {
        label: 'w34',
        value: '#73513C',
    },
    {
        label: 'w35',
        value: '#DAB1B1',
    },
    {
        label: 'w36',
        value: '#2B9FA7',
    },

];
const Admin = () => {
    const products = useSelector(store => store.products.data)
    const dispatch = useDispatch()
    let location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        dispatch(getProducts())
    }, [location]);
    return (
        <Row>
            <Col span={4}>
                <Menu
                    theme={'dark'}
                    style={{
                        width: 256,
                    }}
                    mode="inline"
                    items={items}
                />
            </Col>
            <Col span={20} style={{padding: "0 50px"}}>
                <Outlet>

                </Outlet>
            </Col>

        </Row>
    );
};

export default Admin;