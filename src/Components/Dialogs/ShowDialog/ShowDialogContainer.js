import React from "react";
import {addMessageActionCreator,updateTextMessageActionCreator} from "../../../redux/dialog-reducer";
import ShowDialog from "./ShowDialog";
import {connect} from "react-redux";

function mapStateToProps(state,props){
    return {
        dialog:state.dialogs,
        element:props.element

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