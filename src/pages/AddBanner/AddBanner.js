import React from 'react';
import style from './AddBanner.module.scss';
import ProductForm from "../../Forms/ProductForm/ProductForm";
import BannerForm from "../../Forms/BannerForm/BannerForm";

const AddBanner = () => {
    return (
        <BannerForm action={'create'}/>
    );
};

export default AddBanner;