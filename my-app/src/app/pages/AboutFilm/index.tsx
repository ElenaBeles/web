import { observer } from "mobx-react";
import styles from './index.module.sass';

import { Header } from "../../components/Header/Header";
import {useLocation, useParams} from "react-router";
import {useStores} from "../../utils";
import {InputWithImg} from "../../components/ui/InputWithImage/InputWithImg";

import icon_plus from "../../components/Header/img/img_plus.svg"
import {Button} from "../../components/ui/Button/Button";

export const AboutFilm = observer ( () => {
    const { collectionStore: { getFilmById } } = useStores();

    const location = useLocation().pathname.split('/');
    const idFilm = location[2];
    const film = getFilmById(idFilm);

    return (
        <div>
            <Header/>
            <div className = { styles.wrapper }>
                <div className = { styles.poster }>
                    <img className = { styles.img_poster } src = { film.posterImg } alt = "poster"/>
                </div>
                <div className = { styles.info_film }>
                    <h1 className = { styles.title }>{ film.title }</h1>
                    <div className = { styles.info }>
                        <p className = { styles.info_year}>{ film.year }</p>
                        <p className ={  styles.info_rate}>{ film.rate}</p>
                    </div>
                    <div className = { styles.info_film_buttons } >
                        <Button
                            className={ styles.button_active}
                            text = "Буду&nbsp;смотреть"
                        />
                        <Button
                            className={ styles.button_disabled}
                            onChange = { true }
                            text = "Просмотрено"
                        />
                    </div>

                    <p className={ styles.film_description }>
                        { film.description }
                    </p>

                    <div className={ styles.film_genres }>
                        {film.genre.map((genre) =>
                            <p className={ styles.film_genre }>
                                { genre }
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
});