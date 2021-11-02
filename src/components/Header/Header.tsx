import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.scss'
import {HeaderAuthPropsType} from "./HeaderContainer";



export const Header: React.FC<HeaderAuthPropsType> = ({login,isAuth}) => {

    return (
        <header className={s.header}>
            <div className={s.header__row}>
                <a href="#" className={s.header__logo}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/1200px-Apple_Computer_Logo_rainbow.svg.png"
                        alt=""/>
                </a>
                <div className={s.header__login}>
                    {
                        isAuth
                            ? <>
                                <div>{login}</div>
                            </>
                            : <NavLink to={'/login'}>
                                sing in
                            </NavLink>
                    }
                </div>
            </div>
        </header>
    )
}