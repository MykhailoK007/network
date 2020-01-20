import React from "react";
import classes from "../Dialogs.module.css";
import {Route} from 'react-router-dom';
import {addMessageActionCreator,updateTextMessageActionCreator} from "../../../redux/dialog-reducer";

function ShowDialog(props) {


    function sendMessage() {
        props.sendMessage(props.element.id)
    }
    function changeTextMessage(e){
       let text = e.target.value;
    props.changeTextMessage(text);
    }


    return (
        <div className = {classes.showDialog}>
            <header>Chat with {props.element.name}</header>
            {props.element.all.map(elem => {
                  return <div> {elem.text }</div>
            })}

                <div className = {classes.createMeassage}>
                <textarea className = {classes.textarea}
                          value = {props.textMessage}
                          onChange = {changeTextMessage}
                          placeholder = {'Create message...'}/>
                <br/>
                <button className = {classes.button} onClick = {sendMessage}>ADD</button>
            </div>
        </div>
    )

}

export default ShowDialog