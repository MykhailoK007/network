import React from "react";
import classes from './CreatePost.module.css'
import {addPostActionCreator,updateTextPostActionCreator} from "../../../../redux/profile-reducer";

function CreatePost(props) {

    let posteRef = React.createRef();

    function createPo() {

        props.dispatch(addPostActionCreator())

    }
    function onTextChange(e) {
        let text=e.target.value;
      props.dispatch(updateTextPostActionCreator(text))

    }
    return (
        <div>
        <textarea ref={posteRef} className={classes.textarea} onChange={onTextChange} value={props.newPostText} placeholder={'Create Post...'}>

        </textarea> <br/>

            <button  className={classes.button}  onClick={createPo}>ADD</button>
        </div>
    )
}

export default CreatePost;