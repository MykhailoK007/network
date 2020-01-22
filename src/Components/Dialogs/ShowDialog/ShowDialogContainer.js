import React from "react";
import classes from "../Dialogs.module.css";
import {Route} from 'react-router-dom';
import {addMessageActionCreator,updateTextMessageActionCreator} from "../../../redux/dialog-reducer";
import ShowDialog from "./ShowDialog";
import {connect} from "react-redux";

function mapStateToProps(state,props){
    return {
        element:props.element,
        newText:state.dialogs.newMessageText
    }
}
function mapDispatchToProps(dispatch){
    return{
        addMessageActionCreator:(id)=>{
            dispatch(addMessageActionCreator(id));
        },
        updateTextMessageActionCreator:(text)=>{
            dispatch(updateTextMessageActionCreator(text));
        }

    }
}

const ShowDialogContainer = connect(mapStateToProps,mapDispatchToProps)(ShowDialog);

export default ShowDialogContainer;