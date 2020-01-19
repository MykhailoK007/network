import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

;
 function renderEntireTree(state) {
    ReactDOM.render(<BrowserRouter>

        <App AppState={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,document.getElementById('root'))
}


renderEntireTree(store.getState());
store.subscribe(renderEntireTree);