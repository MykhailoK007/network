import React from "react";
import classes from "./Profile.module.css";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";

function Profile(props) {
    return(
        <div className='container'>
            <Info/>

            <MyPosts posts={props.posts.MyPosts} addPost={props.addPost} newPostText={props.posts.newPostText} changeText={props.changeText}/>
        </div>
    )
}
export default Profile;