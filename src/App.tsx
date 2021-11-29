import React, {useEffect} from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/Main/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";
import {Dialogs} from "./components/Main/Dialogs/Dialogs";
import {News} from "./components/Main/News/News";
import {Music} from "./components/Main/Music/Music";
import {Video} from "./components/Main/Video/Video";
import UsersContainer from "./components/Main/Users/UsersContainer";
import {Settings} from "./components/Main/Settings/Settings";
import {Error404} from "./components/Main/Error404/Error404";
import {Layout} from "./components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./app/app-reducer";
import {RootReducerType} from "./Redux/redux-store";
import {SuperLoading} from "./UniversalComponents/Loading/SuperLoading";


const App = () => {

    const dispatch = useDispatch();
    const isInitialized = useSelector<RootReducerType, boolean>(state => state.app.isInitialized);

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    if (!isInitialized) {
        return <div className={'loading'}>
            <SuperLoading/>
        </div>
    }
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}> {/*общая обертка*/}
                <Route index element={
                    <ProfileContainer/>}/> {/*index работает точно по адресу /*/}
                <Route path={'login'} element={<Login/>}/>
                <Route path={'profile'} element={<ProfileContainer/>}/>
                <Route path={'profile/:userId'}
                       element={<ProfileContainer/>}/>
                <Route path={'dialogs'} element={<Dialogs/>}/>
                <Route path={'news'} element={<News/>}/>
                <Route path={'music'} element={<Music/>}/>
                <Route path={'video'} element={<Video/>}/>
                <Route path={'users'} element={<UsersContainer/>}/>
                <Route path={'settings'} element={<Settings/>}/>
                <Route path={'settings'} element={<Settings/>}/>
                <Route path={'*'}
                       element={
                           <Error404/>}/> {/* - любые другие страницы*/}
            </Route>
        </Routes>
    );
}

export default App;

