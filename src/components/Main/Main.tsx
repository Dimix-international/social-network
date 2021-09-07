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
import {StoreType} from "../../Redux/state";
import {Error404} from "./Error404/Error404";


type MainPropsType = {
    store: StoreType
}
export const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    VIDEO: '/video',
    SETTINGS: '/settings',
}
export const Main: React.FC<MainPropsType> = (
    {
        store
    }) => {
    const state = store.getState(); //получаем state
    return (
            <main className={c.main}>
                <Sidebar/>
                <div className={c.main__content}>
                    <Switch> {/*выбирает первый подходящий роутер*/}
                        <Route path={PATH.PROFILE} render={() =>
                            <Profile
                                profilePage={state.profilePage}
                                dispatch={store.dispatch.bind(store)} //обязательно bind(store) !!! чтобы this не вызвался от другого имени
                            />}
                        />
                        <Route path={PATH.DIALOGS} render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                        <Route path={PATH.NEWS} render={() => <News/>}/>
                        <Route path={PATH.MUSIC} render={() => <Music/>}/>
                        <Route path={PATH.VIDEO} render={() => <Video/>}/>
                        <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
                        <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                        <Route path={'*'} render={() => <Error404 />}></Route>
                    </Switch>
                </div>
            </main>
    )
}