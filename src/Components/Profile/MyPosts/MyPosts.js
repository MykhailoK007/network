import React from "react";
import classes from './MyPosts.module.css';
import CreatePost from "./CreatePost/CreatePost";
import CreatePostContainer from "./CreatePost/CreatePostContainer";
function Post(props) {
    return (
            <div className = {classes.post}>
                {props.text}
            </div>
    )
}
function MyPosts(props) {

return(
    <div className = {classes.body}>
        <div className = {classes.empty}></div>
        <div className = {classes.posts}>
            <h1>My posts</h1>
            <CreatePostContainer store = {props.store} newPostText = {props.newPostText}/>
        {

            props.posts.map(elem => {
                return <Post text = {elem.text} key = {elem.id}  />
            })
        }
    </div>

    </div>
)
}

export default MyPosts;