import React from 'react';
import c from './Main.module.scss'
import {Sidebar} from "./Sidebar/Sidebar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {Video} from "./Video/Video";
import {StatePropsType} from "../../Redux/state";


type MainPropsType = {
    state: StatePropsType
}

export const Main: React.FC<MainPropsType> = ({state}) => {
    return (
        <BrowserRouter>
            <main className={c.main}>
                <Sidebar/>
                <div className={c.main__content}>
                    <Route path={'/profile'} render={() => <Profile profilePage={state.profilePage}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/video'} render={() => <Video/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Redirect from={'/'} to={'/profile'}/>
                </div>
            </main>
        </BrowserRouter>
    )
}