import React from 'react';
import style from './Banner.module.scss';
import fonts from '../../style/fonts.module.scss';

import {Space, Image, Row, Col} from "antd";
import bannerImg1 from '../../assets/bannerImg1.png'
import bannerImg2 from '../../assets/bannerImg2.png'
import Button from "../Button/Button";

const Banner = () => {
    return (
        <div className={style.banner}>
            <Col span={9}>
                <div style={{margin: "0 0 50px 0"}} className={style.banner_text}>
                    SUMMER SALE
                    GET
                    <span className={style.banner_text_none}>
                        30% OFF
                    </span>
                    <br/>
                    On all dress.
                </div>
                <Button type={'banner'}>shop now</Button>
            </Col>
            <Col span={10} className={style.img_container}>
                <Image className={style.zIndex_1} src={bannerImg2} preview={false}/>
                <Image className={style.zIndex_2} src={bannerImg1} preview={false}/>
            </Col>
        </div>
    );
};

export default Banner;