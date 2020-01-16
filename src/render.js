import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost,chanePostText} from "./redux/state";

export function renderEntireTree(state) {
    ReactDOM.render(<App AppState={state} addPost={addPost} changeText={chanePostText}/>,document.getElementById('root'))
}



