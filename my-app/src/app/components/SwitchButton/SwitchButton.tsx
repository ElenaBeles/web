import {IButton} from "../ui/Button/index.interfaces";
import React from "react";
import {ISwitchButton} from "./index.interfaces";
import styles from "./index.module.sass";

export function SwitchButton(props: ISwitchButton){
    const { isOn, onChange, textLeft, textRight } = props;

    return(
        <>
            <label className = { styles.react_switch } >
                <input
                    checked = { isOn }
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