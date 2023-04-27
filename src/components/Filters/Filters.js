import React, {useState} from 'react';
import style from './Filters.module.scss';
import {Checkbox, Row, Slider, Space, Typography} from "antd";
import SizeCheckbox from "../SizeCheckbox/SizeCheckbox";
import ColorsPick from "../ColorsPick/ColorsPick";
import Button from "../Button/Button";

const brands = [
    "Brand",
    "State",
    "Cooper",
    "bardot",
    "alfani",
    "cece",
    "donna ricco"
]

const dressLengths = [
    "short",
    "knee length",
    "hight low",
    "long",
    "midi",
]
const Filters = () => {
    const [activeSize, setActiveSize] = useState([]);
    const [activeColor, setActiveColor] = useState([]);
    const [activeBrands, setActiveBrands] = useState([]);
    const [activeDressLength, setActiveDressLength] = useState([]);
    const [activePrice, setActivePrice] = useState(null);
    return (
        <Space style={{backgroundColor: "white"}} direction={"vertical"}>
            <Typography.Title level={2}>Brand</Typography.Title>
            <Checkbox.Group onChange={(value) => {
                setActiveBrands(value)
            }} className={style.filters_checkbox_group} options={brands}/>

            <Typography.Title level={2}>Size</Typography.Title>
            <SizeCheckbox activeSize={activeSize} setActiveSize={setActiveSize} allSize/>

            <Typography.Title level={2}>Dress length</Typography.Title>
            <Checkbox.Group onChange={(value) => {
                setActiveDressLength(value)
            }} className={style.filters_checkbox_group} options={dressLengths}/>

            <Typography.Title level={2}>Color</Typography.Title>
            <ColorsPick activeColor={activeColor} setActiveColor={setActiveColor} allColors/>

            <Typography.Title level={2}>Price Range</Typography.Title>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <span>
                    0 EUR
                </span>
                <span>

                </span>
            </div>
            <Slider onChange={(value) => {
                setActivePrice(value)
            }} min={0} max={1000} defaultValue={0}/>

            <Button onClick={() => {
                console.log(activeSize,
                    activeColor,
                    activeBrands,
                    activeDressLength,
                    activePrice)
            }} type={'secondary'}>Apply</Button>
        </Space>
    );
};

export default Filters;