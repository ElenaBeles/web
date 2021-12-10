import React from 'react';
import { ImgInput } from "./index.interfaces";
import style from './index.module.sass';

export const InputWithImg = ( props : ImgInput ) => {
    const { value, onChange, placeholder, type = 'text', className, src, status } = props;

    return(
        <>
            {status === "active" ?
                <div className = { style.wrapper_InputWithImg_active }>
                    <img src = { src }/>
                    <input
                        type = { type }
                        placeholder = { placeholder }
                        value = { value }
                        onChange = { onChange }
                    />
                </div>
                :
                <div className = { style.wrapper_InputWithImg }>
                    <img src = { src }/>
                    <input
                        type = { type }
                        placeholder = { placeholder }
                        value = { value }
                        onChange = { onChange }
                    />
                </div>
            }
        </>
    )
}