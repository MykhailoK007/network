import React from "react";
import classes from "../Dialogs.module.css";
import {Route} from 'react-router-dom';
function ShowDialog(props) {
    let textareaRef = React.createRef();

    function sendMessage() {
        let text = textareaRef.current.value;
        props.addMessage(props.element.id);
    }
    function changeTextMessage(){
       let text=textareaRef.current.value;
       props.changeTextMessage(text);
    }


    return (
        <div className={classes.showDialog}>
            <header>Chat with {props.element.name}</header>
            {props.element.all.map(elem=>{
                  return <div> {elem.text }</div>
            })}

                <div className={classes.createMeassage}>
                <textarea ref={textareaRef} className={classes.textarea} value={props.textMessage} onChange={changeTextMessage}/>
                <br/>
                <button className={classes.button} onClick={sendMessage}>ADD</button>
            </div>
        </div>
    )

}

export default ShowDialog