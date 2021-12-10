import {UserModel} from "../models/User.model";
import {MainStore} from "./MainStore";
import {action, makeObservable, observable} from "mobx";
import {CollectionModel} from "../models/Collection.model";

import minari from "../mocks/img/Minari.svg";
import lighthouse from "../mocks/img/Lighthouse.svg";
import solstice from "../mocks/img/Solstice.svg";
import soul from "../mocks/img/Soul.svg";
import argument from "../mocks/img/Argument.svg";

const collectionMock = [
    {
        id: 1,
        title: 'Минари',
        rate: '6.9',
        posterImg: minari,
        description: '1980-е годы. Семья корейских иммигрантов с двумя детьми переезжает из Калифорнии в Арканзас. ',
        genre: [ "драма", "романтика" ],
        year: '2020'
    },
    {
        id: 2,
        title: 'Маяк',
        rate: '7.1',
        posterImg: lighthouse,
        description: '1890-е годы, где-то неподалёку от побережья Новой Англии. Молодой человек Эфраим Уинслоу приезжает на отдалённый остров работать новым помощником смотрителя маяка, хромого бородатого любителя выпить Томаса Уэйка. ',
        genre: [ "ужас" ],
        year: '2019'
    },
    {
        id: 3,
        title: 'Солнцестояние',
        rate: '6.6',
        posterImg: solstice,
        description: 'День летнего солнцестояния – древний праздник, который во всех культурах окутан мистическим ореолом. ',
        genre: [ "фантастика", "романтика" ],
        year: '2019'
    },
    {
        id: 4,
        title: 'Душа',
        rate: '8.3',
        posterImg: soul,
        description: 'Уже немолодой школьный учитель музыки Джо Гарднер всю жизнь мечтал выступать на сцене в составе джазового ансамбля.',
        genre: [ "мультфильм","фэнтези","драма" ],
        year: '2020'
    },
    {
        id: 5,
        title: 'Довод',
        rate: '7.6',
        posterImg: argument,
        description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана. ',
        genre: [ "драма", "научное" ],
        year: '2020'
    }
]

export class CollectionStore {
    collections: CollectionModel[];

    constructor(public mainStore : MainStore) {
        makeObservable(this, {
            collections: observable,
            getFilmById: action
        })

        this.collections = collectionMock
    }

    getFilmById = (id: number) : CollectionModel => {
        let film: CollectionModel = {
            id: 0,
            title: '',
            rate: '',
            posterImg: '',
            description: '',
            genre: [''],
            year: '1111'
        };

        for(let i = 0;i < this.collections.length; i++) {
            if(this.collections[i].id == id) {
                film = this.collections[i]
            }
        }
        return film;
    }
}