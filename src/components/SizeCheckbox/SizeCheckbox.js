import React from 'react';
import style from './SizeCheckbox.module.scss';
import {Space} from "antd";
import {options} from "../../pages/Admin/Admin";

const SizeCheckbox = ({size, setActiveSize, activeSize}) => {
    const onDivClick = (value) => {
        setActiveSize(value)
    }
    const optionsSize = options.map(value => {
        return {...value, ...{status: size.includes(value.value)}}
    })
    return (
        <Space wrap>
            {
                // size.map((value) =>
                //     <div className={`${style.sizeCheckbox} ${activeSize === value ? style.activeSizeCheckbox : null}`}
                //          key={value} onClick={() => onDivClick(value)}>
                //         {
                //             value
                //         }
                //     </div>
                // )
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