import React from 'react';
import HeaderContainer from "./Header/HeaderContainer";
import {Main} from "./Main/Main";
import {Footer} from "./Footer/Footer";
import s from './Layout.module.css'

export const Layout = () => {
    return (
        <div className={s.wrapper}>
            <HeaderContainer />
            <Main/>
            <Footer/>
        </div>
    );
}


