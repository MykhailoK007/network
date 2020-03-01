import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import authorizationReducer from "./authorization-reducer";
import ThunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    profile:profileReducer,
    dialogs:dialogReducer,
    users:usersReducer,
    authorization:authorizationReducer,
    form:formReducer
})

let store=createStore(reducers,applyMiddleware(ThunkMiddleware));


export default store;