import React from 'react';
import c from './Main.module.scss'
import {Sidebar} from "./Sidebar/Sidebar";
import {Outlet} from "react-router-dom";


export const Main = () => {

    return (
        <main className={c.main}>
            <Sidebar/>
            <div className={c.main__content}>
                <Outlet /> {/*хранятся содержимые роутов*/}
            </div>
        </main>
    )
}