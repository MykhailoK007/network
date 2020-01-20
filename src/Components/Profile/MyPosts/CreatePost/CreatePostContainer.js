import React from "react";
import classes from './CreatePost.module.css'
import {addPostActionCreator,updateTextPostActionCreator} from "../../../../redux/profile-reducer";
import CreatePost from "./CreatePost";

function CreatePostContainer(props) {

    let posteRef = React.createRef();

    function createPost() {

        props.store.dispatch(addPostActionCreator())

    }
    function onTextChange(text) {

      props.store.dispatch(updateTextPostActionCreator(text))

    }
    return (
        <CreatePost createPost={createPost} onTextChange={onTextChange} newPostText={props.newPostText}/>
    )
}

export default CreatePostContainer;