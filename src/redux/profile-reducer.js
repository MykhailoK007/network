import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initalState={
    MyPosts:[
        {id:1,text:'Hello this is my first post',likes:5},
        {id:2,text:'This is second',likes:10}
    ],
    newPostText:'',
    profile:null,
    userStatus:''
}

function profileReducer(state=initalState,action){
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: state.MyPosts.length + 1,
                text: state.newPostText,
                likes: 0
            }

            return {
                ...state,
                MyPosts:[...state.MyPosts,newPost],
                newPostText: ''
            }

        case UPDATE_TEXT_POST:
            return {
                ...state,
                newPostText:action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile:action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status:action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type:ADD_POST
    }
}
export const updateTextPostActionCreator = (text) => {
    return{
        type:UPDATE_TEXT_POST,
        newText:text
    }
}
export const setUserProfile = (profile) => {
    return {
        type:SET_USER_PROFILE,
        profile
    }
}
export const setUserStatus = (status) => {
    return {
        type:SET_USER_STATUS,
        status
    }
}

export const getById = (userId) => dispatch => {
    usersAPI.getById(userId)
        .then(data =>{
            dispatch(setUserProfile(data))
        })
}
export const getStatus = (userId) => dispatch => {
    usersAPI.getStatus(userId)
        .then(data =>{
            dispatch(setUserStatus(data.data))
        } )
}
export const updateStatus = (status) => dispatch => {
    usersAPI.updateStatus(status)
        .then(data => {
            if(data.data.resultCode === 0 ) {
                dispatch(setUserStatus(status))
            }
        })
}

export default profileReducer;
