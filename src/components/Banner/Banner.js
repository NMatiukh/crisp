import React from 'react';
import style from './Banner.module.scss';
import {Space, Image, Row} from "antd";
import bannerImg1 from '../../assets/bannerImg1.png'
import bannerImg2 from '../../assets/bannerImg2.png'
import Button from "../Button/Button";

const Banner = () => {
    return (
        <div className={style.banner}>
            <Row justify={"space-around"}>
                <div>
                    SUMMER SALE
                    GEt 30% OFF
                    On all dress.
                </div>
                <Button type={'banner'}>shop now</Button>
                <div>
                    <Image className={style.zIndex_1} src={bannerImg2} preview={false}/>
                    <Image className={style.zIndex_2} src={bannerImg1} preview={false}/>
                </div>
            </Row>

        </div>
    );
};

export default Banner;