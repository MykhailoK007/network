import React from "react";
import classes from "../Dialogs.module.css";
import {Route} from 'react-router-dom';
import {addMessageActionCreator,updateTextMessageActionCreator} from "../../../redux/dialog-reducer";
import ShowDialog from "./ShowDialog";

function ShowDialogContainer(props) {


    function sendMessage(id) {
        props.store.dispatch(addMessageActionCreator(props.element.id));
    }
    function changeTextMessage(text){

    props.store.dispatch(updateTextMessageActionCreator(text))
    }

    return (
        <ShowDialog  textMessage = {props.textMessage}
                     sendMessage = {sendMessage}
                     changeTextMessage = {changeTextMessage}
                     element = {props.element}/>
    )

}

export default ShowDialogContainer;