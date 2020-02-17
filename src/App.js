import React from 'react';
import Header from "./Components/Header/Header";
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import {Route, Router} from 'react-router-dom';
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Login from "./Components/Login";

function App(props) {

    return (

            <div className = 'divWrapper'>
                <Header/>

                    <Route  path = '/Profile/:userId?' render = {() =><ProfileContainer /> }/>
                    <Route  path = '/Users' render = {() => <UsersContainer/> }/>
                    <Route  path = '/Dialogs' render = {() => <Dialogs dialogs = {props.dialogs}/>}/>
                    <Route  path = '/News' render = {( ) => <News/>} />
                    <Route path = '/login' render = {()=><Login/> }/>

            </div>

    );
}

export default App;
