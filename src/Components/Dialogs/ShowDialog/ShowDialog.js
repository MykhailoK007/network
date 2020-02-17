import React from "react";
import classes from "../Dialogs.module.css";

function ShowDialog(props) {

    function sendMessage(){
        props.addMessageActionCreator(props.element.id)
    }
    function changeTextMessage(e){
       let text = e.target.value;
    props.updateTextMessageActionCreator(text);
    }

    return (
        <div className = {classes.showDialog}>
            <header>Chat with {props.element.name}</header>
            {props.element.all.map(elem => {
                  return <div key={elem.id}> {elem.text }</div>
            })}
                <div className = {classes.createMeassage}>
                <textarea className = {classes.textarea}
                          value = {props.dialog.newMessageText}
                          onChange = {changeTextMessage}
                          placeholder = {'Create message...'}/>
                <br/>
                <button className = {classes.button} onClick = {sendMessage}>ADD</button>
            </div>
        </div>
    )

}

export default ShowDialog