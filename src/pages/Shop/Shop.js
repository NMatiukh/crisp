import React from 'react';
import style from './Shop.module.scss';
import ProductPage from "../ProductPage/ProductPage";
import {useSelector} from "react-redux";
import {Col, Row, Space, Typography} from "antd";
import ProductCard from "../../components/ProductCard/ProductCard";
import {Link} from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import {isEmpty, isLoaded, useFirebaseConnect, useFirestoreConnect} from "react-redux-firebase";

const Shop = () => {
        // const products = useSelector(state => state.products.data)
        useFirestoreConnect([
            {collection: 'products'} // or 'todos'
        ])
        const products = useSelector((state) => state.firestore.ordered.products);

        return isLoaded(products) && !isEmpty(products) &&
        <Row>
            <Col span={4}>
                <Filters/>
            </Col>
            <Col span={18}>
                <Space wrap>
                    {
                        products.map(value => <Link to={`/shop/${value.id}`} key={value.id}>
                            <ProductCard product={value}/>
                        </Link>)
                    }
                </Space>
            </Col>
        </Row>
    }
;

export default Shop;