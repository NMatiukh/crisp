import React from 'react';
import style from './AddProduct.module.scss';
import {Button, Checkbox, Form, Input, InputNumber, Space, Tag} from "antd";
import SizeCheckbox from "../../components/SizeCheckbox/SizeCheckbox";
import {useDispatch} from "react-redux";
import {createProduct} from "../../redux/actions";
import {options, optionsColor} from "../Admin/Admin";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import ProductForm from "../../Forms/ProductForm/ProductForm";


const AddProduct = () => {

    return (
        <ProductForm action={'create'}/>
    );
};

export default AddProduct;