import React from "react";
import classes from './CreatePost.module.css'

function CreatePost(props) {

    let posteRef = React.createRef();

    function createPo() {
        let text = posteRef.current.value;
        props.addPost(text);
        props.changeText('')
    }
    function onTextChange() {
        let text=posteRef.current.value;
        props.changeText(text);
        console.log(text)

    }
    return (
        <div>
        <textarea ref={posteRef} className={classes.textarea} onChange={onTextChange} value={props.newPostText}>

        </textarea> <br/>
            <button  className={classes.button}  onClick={createPo}>ADD</button>
        </div>
    )
}

export default CreatePost;