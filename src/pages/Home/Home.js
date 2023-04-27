import React from 'react';
import style from './Home.module.scss';
import Banner from "../../components/Banner/Banner";
import {Carousel} from "antd";
import {useSelector} from "react-redux";

const Home = () => {
    const banners = useSelector((state) => state.firestore.ordered.banners);
    const contentStyle = {
        width: "100%"
    };
    return (
        <div>
            <Carousel autoplay>
                {
                    banners &&
                    banners.map(value =>
                        <div style={contentStyle} key={value.id}>
                            <img style={{height: "60vh", width: "100%"}} src={value.url} alt=""/>
                        </div>)
                }
            </Carousel>
        </div>
    );
};

export default Home;