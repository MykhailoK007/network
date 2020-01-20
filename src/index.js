import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

;
 function renderEntireTree(state) {
    ReactDOM.render(<BrowserRouter>

        <App AppState = {state} dispatch ={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>,document.getElementById('root'))
}


renderEntireTree(store.getState());
store.subscribe(()=> {
    let state=store.getState();
    renderEntireTree(state);

});