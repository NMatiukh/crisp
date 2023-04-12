import React, {useEffect} from 'react';
import style from './EditProduct.module.scss';
import {useParams} from "react-router-dom";
import ProductForm from "../../Forms/ProductForm/ProductForm";
import {useForm} from "antd/es/form/Form";
import {Form} from "antd";
import {useSelector} from "react-redux";

const EditProduct = () => {
    const {productId} = useParams()
    const product = useSelector(state => state.products.data.find(item => item.id.toString() === productId))
    const loader = useSelector(state => state.loader.loader)

    const [form] = Form.useForm()

    return (
        <>
            {
                loader ? null : <ProductForm action={'edit'} product={product} form={form}/>
            }
        </>

    );
};

export default EditProduct;