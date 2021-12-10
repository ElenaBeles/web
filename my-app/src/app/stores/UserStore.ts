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
        let f : boolean = false
        let k = this.users.length
        for(let i = 0; i < k; i++) {
            if (this.users[i].email == user.email && this.users[i].password == user.password) {
                f = true
                break
            }
        }
        return f;
    }

    login = (redirect: (url : String) => void) => {
        redirect('/');
    }
}
