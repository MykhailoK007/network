import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {addPost,chanePostText,addMessage,changeTextMessage,subscribe} from "./redux/state";
;

 function renderEntireTree(state) {

    ReactDOM.render(<BrowserRouter>

        <App AppState={state} addPost={addPost} changeText={chanePostText} addMessage={addMessage} changeTextMessage={changeTextMessage}/>
    </BrowserRouter>,document.getElementById('root'))
}


renderEntireTree(state);
subscribe(renderEntireTree);