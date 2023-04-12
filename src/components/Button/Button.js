import React from 'react';
import scss from './Button.module.scss'
import {Space} from "antd";

const Button = (props) => {

    switch (props.type) {
        default: {
            return <button {...props} className={scss.default}>
                <Space>
                    {props.icon || null}
                    {props.children}
                </Space>
            </button>
        }
        case 'secondary': {
            return <button onClick={props.onClick}  className={scss.secondary}>
                {props.children}
            </button>
        }
        case 'primary': {
            return <button onClick={props.onClick}  className={scss.primary}>
                {props.children}
            </button>
        }
        case 'banner': {
            return <button onClick={props.onClick}  className={scss.banner}>
                {props.children}
            </button>
        }
    }
};

export default Button;

