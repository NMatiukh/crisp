import React, {useState} from 'react';
import style from './ProductCard.module.scss';
import {Card, Image, Space, Typography} from "antd";
import Meta from "antd/es/card/Meta";
import ColorsPick from "../ColorsPick/ColorsPick";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const ProductCard = ({product}) => {
    const [activeColor, setActiveColor] = useState(product.color[0]);
    return (
        <>
            {
                    <Card
                        hoverable
                        className={style.card}
                        cover={<Image preview={false} src={product.images[activeColor]}
                        />}
                    >
                        <Meta title={product.name} description={
                            <Space direction={"vertical"}>
                                <Typography.Text type={"secondary"}>TOP women</Typography.Text>
                                <Typography.Text strong>{product.price.toFixed(2)} EUR</Typography.Text>
                                <ColorsPick colors={product.color} activeColor={activeColor}
                                            setActiveColor={setActiveColor}/>
                            </Space>
                        }/>
                    </Card>
            }
        </>

    )
        ;
};

export default ProductCard;