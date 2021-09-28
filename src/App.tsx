import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
