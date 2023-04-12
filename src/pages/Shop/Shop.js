import React from 'react';
import style from './Shop.module.scss';
import ProductPage from "../ProductPage/ProductPage";
import {useSelector} from "react-redux";
import {Space} from "antd";
import ProductCard from "../../components/ProductCard/ProductCard";
import {Link} from "react-router-dom";

const Shop = () => {
    const products = useSelector(state => state.products.data)
    return (
        <Space wrap>
            {
                products.map(value => <Link to={`/shop/${value.id}`} key={value.id} >
                    <ProductCard product={value}/>
                </Link>)
            }
        </Space>
    );
};

export default Shop;