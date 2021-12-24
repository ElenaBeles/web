import styles from '../Auth/index.module.sass';
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/Button/Button";
import { Input } from "../../components/ui/Input/Input";
import logo from "../../../assets/img/Watch_Later_Logo_Full.svg";
import {observer} from "mobx-react";
import {useStores} from "../../utils";
import {Link} from "react-router-dom";

export const Registration = observer ( () => {
    const { userStore: { addClient, users} } = useStores();

    const handleAddUser = () => {
        addClient( {
                email: isLogin,
                password: isPassword
            }
        );
    }

    const [isDisabled, setIsDisabled] = useState(true);
    const [isLogin, setLogin] = useState('');
    const [isPassword, setPassword] = useState('');
    const [isRepeatPassword, setRepeatPassword] = useState('');

    useEffect(() => {
        if (isLogin !== '' && isPassword !== '' && isRepeatPassword !== '') setIsDisabled(false);
    },[isLogin, isPassword])

    useEffect(() => {
        if (isLogin === '' && isPassword === '' && isRepeatPassword !== '') setIsDisabled(true);
    },[isLogin, isPassword, isRepeatPassword])

    return (
        <div className={ styles.wrapper }>
            <img  className={ styles.logo } src={ logo } alt="logo"/>
            <form action=""  className={ styles.form }>
                <Input
                    type = 'email'
                    placeholder = 'Адрес электронной почты'
                    value = { isLogin }
                    onChange = { (e : any) => setLogin(e.target.value) }
                    className = { styles.input }
                />
                <Input
                    type =  'password'
                    placeholder = 'Пароль'
                    value = { isPassword }
                    onChange = { (e : any) => setPassword(e.target.value) }
                    className = { styles.input }
                />
                <Input
                    type =  'password'
                    placeholder = 'Повторите пароль'
                    value = { isRepeatPassword }
                    onChange = { (e : any) => setRepeatPassword(e.target.value)}
                    className = { styles.input }
                />
                <Button
                    text = "Зарегистрироваться"
                    disabled = { isDisabled }
                    onClick = { handleAddUser }
                    className = { styles.button_in }
                    type={ "submit" }
                />
            </form>

            <div className = { styles.link_registration }>
                <p>Есть логин для входа?</p>
                <a className={ styles.link_auth }><Link to='/auth'> Войти</Link></a>
            </div>


        </div>
    )
})