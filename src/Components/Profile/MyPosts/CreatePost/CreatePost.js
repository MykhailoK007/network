import React from "react";
import classes from './CreatePost.module.css'
import {addPostActionCreator,updateTextPostActionCreator} from "../../../../redux/profile-reducer";

function CreatePost(props) {

    function createPost() {
        props.createPost();
    }

    function onTextChange(e) {
        let text = e.target.value;
      props.onTextChange(text);
    }

    return (
        <div>
        <textarea className = {classes.textarea}
                  onChange = {onTextChange}
                  value = {props.newPostText}
                  placeholder = {'Create Post...'}>

        </textarea> <br/>

            <button  className = {classes.button}  onClick = {createPost}>ADD</button>
        </div>
    )
}

export default CreatePost;