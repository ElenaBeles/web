import React from 'react';
import styles from './index.module.scss';
import {IButton} from "./index.interfaces";

export function Button(props: IButton){

    const { text, onChange, onClick, className } = props;

    return(
        <button
            disabled = { onChange }
            className = { className }
            onClick = { onClick }
        >
            { text }
        </button>
    )
}