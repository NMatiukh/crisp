import React from 'react';
import style from './EditBanner.module.scss';
import {Navigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Form} from "antd";
import ProductForm from "../../Forms/ProductForm/ProductForm";
import BannerForm from "../../Forms/BannerForm/BannerForm";

const EditBanner = () => {
    const {bannerId} = useParams()
    const banner = useSelector(state => state.firestore.ordered.banners?.find(item => item.id.toString() === bannerId))
    const loader = useSelector(state => state.firestore.ordered.banners !== undefined)
    const [form] = Form.useForm()


    if (banner === undefined) {
        return <Navigate to={'/admin'}/>
    }

    return (
        <BannerForm action={'edit'} banner={banner} form={form}/>

    );
};

export default EditBanner;