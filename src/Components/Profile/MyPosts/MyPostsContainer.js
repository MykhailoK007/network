import React from "react";
import classes from './MyPosts.module.css';

import Post from "./Post/Post";
import {addPostActionCreator, updateTextPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




function mapStateToProps(state){
        return{
            store:state,
            newPostText:state.profile.newPostText}
}
function mapDispatchToPtops(dispatch){
    return{
        addPostActionCreator:()=>{
            dispatch(addPostActionCreator())
        },
        updateTextPostActionCreator:(text)=>{
            dispatch(updateTextPostActionCreator(text))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToPtops)(MyPosts);
export default MyPostsContainer;