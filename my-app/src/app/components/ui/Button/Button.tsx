import React from 'react';
import {IButton} from "./index.interfaces";

export function Button(props: IButton){

    const { text, disabled, onClick, className, type } = props;

    return(
        <button
            disabled = { disabled }
            className = { className }
            onClick = { onClick }
            type = { type }
        >
            { text }
        </button>
    )
}