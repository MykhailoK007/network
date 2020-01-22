import React from "react";
import classes from "../MyPosts.module.css";

function Post (props){
    return(
        <div className={classes.post}>
            {props.text}
        </div>
    )
}


export default Post;
