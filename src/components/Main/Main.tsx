import React from 'react';
import c from './Main.module.scss'
import {Sidebar} from "./Sidebar/Sidebar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Redirect, Route, Switch} from "react-router-dom";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {Video} from "./Video/Video";
import {Error404} from "./Error404/Error404";
import UsersContainer from "./Users/UsersContainer";


export const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    VIDEO: '/video',
    USERS: '/users',
    SETTINGS: '/settings',
}
export const Main = () => {
    return (
        <main className={c.main}>
            <Sidebar/>
            <div className={c.main__content}>
                <Switch> {/*выбирает первый подходящий роутер*/}
                    <Route path={PATH.PROFILE} render={() =>
                        <Profile
                            /*profilePage={store.getState().profilePage}
                            dispatch={store.dispatch.bind(store)} //обязательно bind(store) !!! чтобы this не вызвался от другого имени*/
                        />}
                    />
                    <Route path={PATH.DIALOGS} render={() =>
                        <Dialogs
                            /*dialogsPage={store.getState().dialogsPage}
                            dispatch={store.dispatch.bind(store)}*/
                        />}/>
                    <Route path={PATH.NEWS} render={() => <News/>}/>
                    <Route path={PATH.MUSIC} render={() => <Music/>}/>
                    <Route path={PATH.VIDEO} render={() => <Video/>}/>
                    <Route path={PATH.VIDEO} render={() => <Video/>}/>
                    <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
                    <Route path={PATH.USERS} render={() => <UsersContainer/>}/>
                    <Route path={'/'} exact
                           render={() => <Redirect to={PATH.PROFILE}/>}/>
                    <Route path={'*'} render={() => <Error404/>}> </Route>
                </Switch>
            </div>
        </main>
    )
}