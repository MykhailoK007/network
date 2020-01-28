import React from 'react';
import Header from "./Components/Header/Header";
import './App.css';
import Profile from "./Components/Profile/Profile";
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import {Route, Router} from 'react-router-dom';
import UsersContainer from "./Components/Users/UsersContainer";

function App(props) {

    return (

            <div className = 'divWrapper'>
                <Header/>

                    <Route  path = '/Profile' render = {() =><Profile /> }/>
                    <Route  path = '/Users' render = {() => <UsersContainer/> }/>
                    <Route  path = '/Dialogs' render = {() => <Dialogs dialogs = {props.dialogs}/>}/>
                    <Route  path = '/News' render = {( ) => <News/>} />

            </div>

    );
}

export default App;
