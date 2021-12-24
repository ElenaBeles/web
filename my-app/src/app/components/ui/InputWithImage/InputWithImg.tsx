import React from 'react';
import { ImgInput } from "./index.interfaces";
import style from './index.module.sass';
import cn from "classnames/bind";
import classNames from "classnames/bind"; classNames();

const cx = cn.bind(style);

export const InputWithImg = ( props : ImgInput ) => {
    const { value, onChange, placeholder, type = 'text', src, status } = props;

    return(
        <>
            <div className = { cx( {
                wrapper_InputWithImg_active: status === 'active',
                wrapper_InputWithImg: status !== 'active'
            })  }>
                <img src = { src }/>
                <input
                    type = { type }
                    placeholder = { placeholder }
                    value = { value }
                    onChange = { onChange }
                />
            </div>
        </>
    )
}