import React from 'react';
import styles from './index.module.sass';

export function LayoutContainer(props: any){

    const { children } = props;

    return(
        <div className = { styles.container }>
            { children }
        </div>
    )
}