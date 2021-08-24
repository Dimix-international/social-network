import React from 'react';
import c from './Main.module.scss'
import {Sidebar} from "./Sidebar/Sidebar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {Video} from "./Video/Video";
import {StatePropsType} from "../../Redux/state";


type MainPropsType = {
    state: StatePropsType
}
export const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    VIDEO: '/video',
    SETTINGS: '/settings',
}
export const Main: React.FC<MainPropsType> = ({state}) => {
    return (
        <BrowserRouter>
            <main className={c.main}>
                <Sidebar/>
                <div className={c.main__content}>
                    <Switch> {/*выбирает первый подходящий роутер*/}
                        <Route path={PATH.PROFILE} render={() => <Profile profilePage={state.profilePage}/>}/>
                        <Route path={PATH.DIALOGS} render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                        <Route path={PATH.NEWS} render={() => <News/>}/>
                        <Route path={PATH.MUSIC} render={() => <Music/>}/>
                        <Route path={PATH.VIDEO} render={() => <Video/>}/>
                        <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
                        <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                    </Switch>
                </div>
            </main>
        </BrowserRouter>
    )
}