import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {store, StoreType} from "./Redux/state";

type AppPropsType = {
    store: StoreType
}
const App: React.FC<AppPropsType> = (
    {
        store
    }) => {
    return (
        <div className="wrapper">
            <Header/>
            <Main
                store={store}
            />
            <Footer/>
        </div>
    );
}

export default App;
