import React from "react";
import classes from "./Profile.module.css";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    return(
        <div className='container'>
            <Info/>

            <MyPostsContainer />
        </div>
    )
}
export default Profile;