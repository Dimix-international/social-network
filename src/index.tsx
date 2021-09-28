import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RootReducerType, store} from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(); //первая отрисовка
store.subscribe(() => {
    rerenderEntireTree()
}); //при измененеие state вызываем функцию  rerenderEntireTree(функция подписчик)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
