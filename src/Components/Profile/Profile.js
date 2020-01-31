import React from "react";
import Info from "./Info/Info";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    if(!props.profile){
        return <div></div>
    }
    return(
        <div className='container'>

            <Info photo={props.profile.photos.small} fullName={props.profile.fullName} aboutMe={props.profile.aboutMe}/>
            {console.log(props.profile.photos)}
            <MyPostsContainer />
        </div>
    )
}
export default Profile;