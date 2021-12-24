import styles from './index.module.sass';
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/Button/Button";
import { Input } from "../../components/ui/Input/Input";
import logo from "../../../assets/img/Watch_Later_Logo_Full.svg";
import { useStores } from "../../utils";
import { observer } from "mobx-react";
import {Link, useHistory} from "react-router-dom";
import {UserModel} from "../../models/User.model";

export const Auth = observer ( () => {
    const { userStore: { findClient, login } } = useStores();

    const [isDisabled, setIsDisabled] = useState(true);
    const [isLogin, setLogin] = useState('');
    const [isPassword, setPassword] = useState('');

    let history = useHistory();

    const redirect = () => {
        history.push('/');
    }

    const handleCheckUser = () => {
        let userCheck : UserModel = {
            email: isLogin,
            password: isPassword
        }
        if (findClient(userCheck)) {
            login(redirect)
        }
    }

    useEffect(() => {
        if (isLogin !== '' && isPassword !== '') setIsDisabled(false);
        if (isLogin === '' && isPassword === '') setIsDisabled(true);
    },[isLogin, isPassword])


    return (
        <div className={ styles.wrapper }>
            <img  className={ styles.logo } src={ logo } alt="logo"/>
            <form action=""  className={ styles.form }>
                <Input
                    type = 'email'
                    placeholder = 'Адрес электронной почты'
                    value = { isLogin }
                    onChange = { (e : any) => setLogin(e.target.value)}
                    className = { styles.input }
                />
                <Input
                    type =  'password'
                    placeholder = 'Пароль'
                    value = { isPassword }
                    onChange = { (e : any) => setPassword(e.target.value)}
                    className = { styles.input }

                />

                <Button
                    text = "Войти"
                    disabled = { isDisabled }
                    onClick = { handleCheckUser }
                    className = { styles.button_in }
                    type={ "submit" }
                />

            </form>
            
            <div className = { styles.link_registration }>
                <p>Еще не зарегистрированы?</p>
                <a className={ styles.link_auth }><Link to='/registration'> Регистрация</Link></a>
            </div>
        </div>
    )
});