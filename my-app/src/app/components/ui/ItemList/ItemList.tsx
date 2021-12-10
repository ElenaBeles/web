import React from 'react';
import styles from './index.module.sass';
import { IItemList } from "./index.interfaces";
import {Link} from "react-router-dom";

export const ItemList = ( props : IItemList ) => {
    const { title, link, img } = props;

    return(
        <button className={ styles.ItemList }>
            <Link to={ link } className = { styles.link }>
                <div className={ styles.wrapper_text }>
                    <p>{ title }</p>
                    <img src = { img }/>
                </div>
            </Link>
        </button>
    )
}