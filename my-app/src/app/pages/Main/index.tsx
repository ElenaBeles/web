import { observer } from "mobx-react";
import styles from './index.module.sass';

import icon_list from '../../../assets/img/Icon_List.svg';
import icon_thumbnails from '../../../assets/img/Icon_Thumbnails.svg';
import icon_item_list from '../../../assets/img/IconItem.svg';

import { useState } from "react";
import { useStores } from "../../utils";

import { BaseLayout } from "../../containers/BaseLayout";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { ItemList } from "../../components/ui/ItemList/ItemList";
import {SwitchButton} from "../../components/SwitchButton/SwitchButton";

export const Main = observer ( () => {
    const { collectionStore: { collections } } = useStores();
    const [isList, setIsList] = useState(false);

    const [isWatch, setIsWatch] = useState(true);

    const handleChange = () => {
        setIsList(!isList)
    }

    return (
        <div>
            <Header/>
            <BaseLayout
                title={"Коллекция"}
                children={
                    <div className = { styles.wrapper_main }>
                        <div className = { styles.button_filters }>
                            <SwitchButton
                                checked ={ isWatch }
                                onChange={ () => setIsWatch(!isWatch) }
                                textLeft={ "Буду смотреть" }
                                textRight={ "Просмотрено" }
                            />

                            { isList ?
                                <input
                                    className = { styles.card_format_filter }
                                    onClick = { handleChange }
                                    type = { "image" }
                                    src = { icon_thumbnails }
                                />
                                :
                                <input
                                    className = { styles.card_format_filter }
                                    onClick = { handleChange }
                                    type = { "image" }
                                    src = { icon_list }
                                />
                            }
                        </div>
                        {isList ?
                               <div className = { styles.block_list }>
                                   { collections.map((film) =>
                                       <ItemList
                                           title = { film.title }
                                           img = { icon_item_list }
                                           link = { '/film/' + film.id }
                                       />
                                   ) }
                            </div>
                            :
                            <div className = { styles.block_thumbnails }>
                                    { collections.map((film) =>
                                        <div className={ styles.film }>
                                            <img className = { styles.film_poster} src = { film.posterImg }/>
                                            <p className = { styles.film_rate}>{ film.rate }</p>
                                            <h6 className = { styles.film_title}><Link className = { styles.link_film} to = { '/film/' + film.id }>{ film.title }</Link></h6>
                                        </div>
                                    ) }
                            </div>
                        }
                    </div>
                }
            />
        </div>
    )
});