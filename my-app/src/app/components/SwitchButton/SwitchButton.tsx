import {IButton} from "../ui/Button/index.interfaces";
import React from "react";
import {ISwitchButton} from "./index.interfaces";
import styles from "./index.module.sass";

export function SwitchButton(props: ISwitchButton){
    const { checked, onChange, textLeft, textRight } = props;

    return(
        <>
            <label className = { styles.react_switch } >
                <input
                    checked = { checked }
                    onChange = { onChange }
                    className= { styles.react_switch_checkbox }
                    type="checkbox"
                />
                <div className= { styles.react_switch_button } />
                <div className= { styles.react_switch_labels } >
                    <span>{ textLeft }</span>
                    <span>{ textRight }</span>
                </div>
            </label>
        </>
    )
}