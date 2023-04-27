import React from 'react';
import style from './ColorsPick.module.scss';
import {Space} from "antd";
import {optionsColor} from "../../pages/Admin/Admin";

const ColorsPick = ({colors, setActiveColor, activeColor, allColors}) => {
    const onDivClick = (value, e) => {
        e.stopPropagation()
        e.preventDefault()
        if (allColors) {
            if (activeColor.includes(value)) {
                setActiveColor(activeColor.filter(item => item !== value))
            } else {
                setActiveColor([...activeColor, value])
            }
        }
        setActiveColor(value)
    }
    return (
        <Space wrap>
            {
                allColors ?
                    optionsColor.map((value) =>
                        <div
                            className={`${style.colorItemBlock} ${activeColor.includes(value.value) ? style.activeColorItem : null}`}
                            key={value.value} onClick={(e) => onDivClick(value.value, e)}>
                            <div className={style.colorItem} style={{backgroundColor: value.value}}/>
                        </div>
                    )
                    :
                    colors.map((value) =>
                        <div
                            className={`${style.colorItemBlock} ${activeColor === value ? style.activeColorItem : null}`}
                            key={value} onClick={(e) => onDivClick(value, e)}>
                            <div className={style.colorItem} style={{backgroundColor: value}}/>
                        </div>
                    )
            }
        </Space>
    );
};

export default ColorsPick;