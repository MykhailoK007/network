import React from "react";
import classes from "./Profile.module.css";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";

function Profile(props) {
    return(
        <div className='container'>
            <Info/>

            <MyPosts posts={props.posts.MyPosts} dispatch={props.dispatch} newPostText={props.posts.newPostText} />
        </div>
    )
}
export default Profile;