import React, {useEffect, useState} from 'react';
import style from './ProductPage.module.scss';
import {Col, Row, Image, Typography, Space, InputNumber} from "antd";
import ColorsPick from "../../components/ColorsPick/ColorsPick";
import SizeCheckbox from "../../components/SizeCheckbox/SizeCheckbox";
import Button from "../../components/Button/Button";
import {HeartOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {createShopItem, editShopItem} from "../../redux/actions";
import {useParams} from "react-router-dom";

const ProductPage = () => {
    const {productId} = useParams()
    const product = useSelector(state => state.firestore.ordered.products?.find(item => item.id.toString() === productId))
    const shopItems = useSelector(state => state.shopItems.data)
    const loader = useSelector(state => state.firestore.ordered.products !== undefined)
    const [activeColor, setActiveColor] = useState(loader ? null : product?.color[0]);
    const [activeSize, setActiveSize] = useState(loader ? null : product?.size[0]);
    const [quantity, SetQuantity] = useState(1);
    const dispatch = useDispatch()
    useEffect(() => {
        setActiveColor(product?.color[0])
        setActiveSize(product?.size[0])
    }, [loader]);

    const onSubmit = () => {
        const obj = {
            name: product.name,
            color: activeColor,
            size: activeSize,
            price: product.price,
            quantity: quantity,
            image: product.images[activeColor],
            id: product.name + activeColor + activeSize
        }
        let index = shopItems.findIndex(value => value.id === obj.id);
        if (index === -1) {
            dispatch(createShopItem(obj))
        } else {
            dispatch(editShopItem({...obj, quantity: obj.quantity + shopItems[index].quantity}))
        }
    }

    return (
        <>
            {
                !loader ? null :
                    <Row style={{backgroundColor: "white"}}>
                        <Col span={12}>
                            <Image src={product.images[activeColor]}/>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Typography.Title>{product.name}</Typography.Title>
                            </Row>
                            <Row>
                                <Space direction={"vertical"}>
                                    <span>{"Select Color".toUpperCase()}</span>
                                    <ColorsPick colors={product.color} setActiveColor={setActiveColor}
                                                activeColor={activeColor}/>
                                </Space>
                            </Row>
                            <Row>
                                <Space direction={"vertical"}>
                                    <Row justify={"space-between"}>
                                        <Typography.Text>{"Select size (Inches)".toUpperCase()}</Typography.Text>
                                        <Typography.Link underline>Size guide</Typography.Link>
                                    </Row>
                                    <SizeCheckbox activeSize={activeSize} size={product.size}
                                                  setActiveSize={setActiveSize}/>
                                </Space>
                            </Row>
                            <Row>
                                <Space>
                                    <Col>
                                        <InputNumber onChange={(e) => SetQuantity(e)} defaultValue={1} min={1}/>
                                    </Col>
                                    <Col>
                                        {
                                            product.price * quantity
                                        }
                                        EUR
                                    </Col>
                                </Space>
                            </Row>
                            <Row>
                                <Space>
                                    <Button onClick={onSubmit} type={'primary'}>Add to bag</Button>
                                    <Button icon={<HeartOutlined/>}>Save</Button>
                                </Space>
                            </Row>

                        </Col>
                    </Row>
            }
        </>

    );
};

export default ProductPage;