import React from 'react';
import './App.scss';
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
        <div className="wrapper">
            <HeaderContainer />
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
