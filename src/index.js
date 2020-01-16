import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from "./redux/state";
import {renderEntireTree} from "./render";
import state from "./redux/state";


renderEntireTree(state);
