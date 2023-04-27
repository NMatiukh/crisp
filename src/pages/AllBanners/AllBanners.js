import React from 'react';
import style from './AllBanners.module.scss';
import {useSelector} from "react-redux";
import {Space} from "antd";
import {Link} from "react-router-dom";

const AllBanners = () => {
    const banners = useSelector((state) => state.firestore.ordered.banners);

    return (
        <Space direction={'vertical'}>
            {
                banners &&
                banners.map(value => (
                    <Link key={value.id} to={`${value.id}`}>
                        <img src={value.url}/>
                    </Link>
                ))
            }
        </Space>
    );
};

export default AllBanners;