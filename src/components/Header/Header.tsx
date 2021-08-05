import React from 'react';
import classes from './Header.module.scss'
export const Header = () => {
    return(
        <header className={classes.header}>
            <a href="#" className={classes.header__logo}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/1200px-Apple_Computer_Logo_rainbow.svg.png"
                    alt=""/>
            </a>
            <p className={classes.item}>Текс для проверки модулей</p>
        </header>
    )
}