import React from 'react';
import style from './SizeCheckbox.module.scss';
import {Space} from "antd";
import {options} from "../../pages/Admin/Admin";

const SizeCheckbox = ({size, setActiveSize, activeSize, allSize}) => {
    const onDivClick = (value) => {
        if (activeSize.includes(value)) {
            setActiveSize(activeSize.filter(item => item !== value))
        } else {
            setActiveSize([...activeSize, value])
        }
    }
    const optionsSize = allSize ? null : options.map(value => {
        return {...value, ...{status: size.includes(value.value)}}
    })
    return (
        <Space wrap>
            {
                allSize ?
                    options.map((value) =>
                        <div
                            className={`${style.sizeCheckbox} ${activeSize.includes(value.value) ? style.activeSizeCheckbox : null}`}
                            key={value.value} onClick={() => onDivClick(value.value)}>
                            {
                                value.label
                            }
                        </div>
                    ) :
                    optionsSize.map(size =>
                        <div
                            className={`${style.sizeCheckbox} ${activeSize === size.value ? style.activeSizeCheckbox : null} ${!size.status ? style.notFoundSizeCheckbox : null}`}
                            key={size.value} onClick={() => size.status && onDivClick(size.value)}>
                            {
                                size.value
                            }
                        </div>)
            }
        </Space>
    );
};

export default SizeCheckbox;