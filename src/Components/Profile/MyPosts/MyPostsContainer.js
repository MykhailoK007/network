import React from "react";
import {addPostActionCreator, updateTextPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




function mapStateToProps(state){
        return{
            store:state,
            newPostText:state.profile.newPostText}
}
function mapDispatchToProps(dispatch){
    return{
        addPostActionCreator:()=>{
            dispatch(addPostActionCreator())
        },
        updateTextPostActionCreator:(text)=>{
            dispatch(updateTextPostActionCreator(text))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;