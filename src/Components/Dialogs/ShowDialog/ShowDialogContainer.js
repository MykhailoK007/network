import React from "react";
import {addMessageActionCreator,updateTextMessageActionCreator} from "../../../redux/dialog-reducer";
import ShowDialog from "./ShowDialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

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
let AuthRedirectComponent = withAuthRedirect(ShowDialog)
const ShowDialogContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default ShowDialogContainer;