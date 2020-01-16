import React from 'react';
import Header from "./Components/Header/Header";
import './App.css';
import Profile from "./Components/Profile/Profile";
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import Nav from './Components/Nav/Nav';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {

    return (
        <BrowserRouter>
            <div className='divWrapper'>
                <Header/>
                <Route exact path='/Profile' render={()=><Profile posts={props.AppState.profile} addPost={props.addPost} changeText={props.changeText}/> }/>
                <Route exect path='/Dialogs' render={()=><Dialogs dialogs={props.AppState.dialog}/>}/>
                <Route exact path='/News' render={()=><News/>} />
            </div>
        </BrowserRouter>
    );
}

export default App;
