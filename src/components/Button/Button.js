import React from 'react';
import scss from './Button.module.scss'
const Button = (props) => {

    switch (props.type) {
        default: {
            return <button className={scss.default}>
                {props.icon || null}
                {props.children}
            </button>
        }
        case 'secondary': {
            return <button className={scss.secondary}>
                {props.children}
            </button>
        }
        case 'primary': {
            return <button className={scss.primary}>
                {props.children}
            </button>
        }
        case 'banner': {
            return <button className={scss.banner}>
                {props.children}
            </button>
        }
    }
};

export default Button;

