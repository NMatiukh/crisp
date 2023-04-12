import React from 'react';
import style from './ColorsPick.module.scss';
import {Space} from "antd";

const ColorsPick = ({colors, setActiveColor, activeColor}) => {
    const onDivClick = (value) => {
        setActiveColor(value)
    }
    return (
        <Space wrap>
            {
                colors.map((value) =>
                    <div className={`${style.colorItemBlock} ${activeColor === value ? style.activeColorItem : null}`} key={value} onClick={() => onDivClick(value)}>
                        <div className={style.colorItem} style={{backgroundColor: value}}/>
                    </div>

                )
            }
        </Space>
    );
};

export default ColorsPick;