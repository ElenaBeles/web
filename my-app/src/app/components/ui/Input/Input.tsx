import React from 'react';
import { IInput } from "./index.interfaces";


export const Input = ( props : IInput ) => {
    const {value, onChange, placeholder, type = 'text',  className} = props;

    return(
        <input
            type = { type }
            placeholder = { placeholder }
            value = { value }
            onChange = { onChange }
            className = { className }
        />
    )
}