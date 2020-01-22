import React from "react";
import classes from './MyPosts.module.css';

import Post from "./Post/Post";
import {addPostActionCreator, updateTextPostActionCreator} from "../../../redux/profile-reducer";


function MyPosts(props) {

    let posts=props.store.profile.MyPosts.map(elem=>{ return <Post key={elem.id} text={elem.text}/> });

    function createPost() {
        props.addPostActionCreator();
    }
    function onTextChange(e) {
        let text = e.target.value;
        props.updateTextPostActionCreator(text);
    }


    return(
    <div className = {classes.body}>
        <div className = {classes.empty}></div>
        <div className = {classes.posts}>
            <h1>My posts</h1>
            <div>
                 <textarea className = {classes.textarea}
                  onChange = {onTextChange}
                  value = {props.newPostText}
                  placeholder = {'Create Post...'}>

                </textarea>
                 <br/>
                 <button  className = {classes.button}  onClick = {createPost}>ADD</button>
            </div>
            {posts}
        </div>
    </div>
)
}

export default MyPosts;