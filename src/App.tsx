import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {PostPropsType, StatePropsType, UserType} from "./Redux/state";

type AppPropsType = {
    state: StatePropsType
}
const App: React.FC<AppPropsType> = ({state}) => {
    return (
        <div className="wrapper">
            <Header/>
            <Main
                state={state}
            />
            <Footer/>
        </div>
    );
}

export default App;
