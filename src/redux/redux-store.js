import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import authorizationReducer from "./authorization-reducer";

let reducers = combineReducers({
    profile:profileReducer,
    dialogs:dialogReducer,
    users:usersReducer,
    authorization:authorizationReducer
})

let store=createStore(reducers);


export default store;