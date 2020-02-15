import {authorizationApi} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';


let initalState = {
    id:null,
    login:null,
    mail:null,
    isAuth:false
}

function authorizationReducer(state = initalState, action){
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default :
            return state

    }
}



export const setUserData = (id, login, email) => {
    return {
        type:SET_USER_DATA,
        data: {
            id,
            email,
            login
        }
    }
};
export const getAuthorizationInfo = () => dispatch =>{
    authorizationApi.getInfo()
        .then(data =>{
            if(data.resultCode == 0) {
                let {id, login, email} =data.data
                dispatch(setUserData(id, login,email))
            }
        })
}
export default authorizationReducer;