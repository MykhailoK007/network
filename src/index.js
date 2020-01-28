import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


 function renderEntireTree(state) {
    ReactDOM.render(<BrowserRouter>

        <Provider store={store}><App dialogs={state.dialogs}/></Provider>

    </BrowserRouter>,document.getElementById('root'))
}


renderEntireTree(store.getState());
// store.subscribe(()=> {
//     let state=store.getState();
//     renderEntireTree(state);
//
// });