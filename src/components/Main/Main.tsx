import React from 'react';
import c from './Main.module.scss'
import {Sidebar} from "./Sidebar/Sidebar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";

export const Main = () => {
    return(
        <main className={c.main}>
            <Sidebar />
            <div className={c.main__content}>
                <Profile />
                {/*<Dialogs />*/}
            </div>
        </main>
    )
}