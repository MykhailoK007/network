import React from 'react';
import Header from "./Components/Header/Header";
import './App.css';
import Profile from "./Components/Profile/Profile";
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import Nav from './Components/Header/Nav/Nav';
import { Route} from 'react-router-dom';

function App(props) {

    return (

            <div className='divWrapper'>
                <Header/>
                <Route exact path='/Profile' render={()=><Profile posts={props.AppState.profile} dispatch={props.dispatch}/> }/>
                <Route exect path='/Dialogs' render={()=>
                    <Dialogs dialogs={props.AppState.dialogs}
                             dispatch={props.dispatch}/>}/>
                <Route exact path='/News' render={()=><News/>} />
            </div>

    );
}

export default App;
