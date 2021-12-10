import React, {useState} from 'react'

import logo from './img/Watch_Later_Logo_Short.svg';
import photoProfile from './img/photo_profile.svg';
import iconSearch from './img/IconSearch.svg';
import plus from './img/img_plus.svg';
import circle_active from './img/img_collection_active.svg'
import circle from './img/img_collection.svg'

import styles from './index.module.sass';

import {InputWithImg} from "../ui/InputWithImage/InputWithImg";
import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom'
import {useLocation} from "react-router";


export function Header(props: any){

    const [isSearch, setSearch] = useState('');

    const location = useLocation().pathname.split('/');
    const page = location[1];


    return(
        <header>
            <div className = { styles.header_wrapper }>
                <div className = { styles.left_item }>
                    { page === "collection" ?
                        <InputWithImg
                            type = "button"
                            value = { "Коллекция" }
                            src = { circle_active }
                            className = { styles.button_input_active}
                            status={ "active" }
                        />
                        :
                        <InputWithImg
                            type = "button"
                            value = { "Коллекция" }
                            src = { circle }
                            className = { styles.button_input_passive}
                        />
                    }

                    <InputWithImg
                        type = "button"
                        value = { "Добавить" }
                        src = { plus }
                        className = { styles.button_input_right}
                    />
                </div>
                <div className = { styles.center_item }>
                    <Link to = "/collection">
                        <img className ={ styles.logo } src= { logo } alt="logo"/>
                    </Link>
                </div>
                <div className = { styles.right_item }>
                    <InputWithImg
                        type = "text"
                        placeholder = { "Поиск" }
                        value = { isSearch }
                        src = { iconSearch }
                        onChange = { (e : any) => setSearch(e.target.value)}
                        className = { styles.button_input}
                    />
                    <img className={ styles.photoProfileCircle } src= { photoProfile } alt="photoProfile"/>
                </div>
            </div>
        </header>
    )
}