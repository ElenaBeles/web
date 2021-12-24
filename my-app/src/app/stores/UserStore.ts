import { action, makeObservable, observable } from 'mobx';
import { UserModel } from '../models/User.model';
import {MainStore} from "./MainStore";

export class UserStore {
    users: Array<UserModel>;

    constructor(public mainStore : MainStore) {
        makeObservable(this, {
            users: observable,
            addClient: action,
            findClient: action,
            login: action
        })

        this.users = [
            {
                email: 'user1@mail.ru',
                password: '123qwerty'
            },
            {
                email: 'user2@mail.ru',
                password: '123qwerty'
            },
            {
                email: 'user3@mail.ru',
                password: '123qwerty'
            }
        ]

    }

    addClient = (user: UserModel) => {
        this.users.push(user);
    }

    findClient = (user: UserModel) => {
        return this.users.filter(item => item.email === user.email && item.password === user.password).length === 1;
    }

    login = (redirect: (url : String) => void) => {
        redirect('/');
    }
}
