import React  from "react";
import {NavLink} from "react-router-dom";
import classes from "../Dialogs.module.css";



function DialogItem(props) {
    return (
        <div>
            <NavLink  to={'/Dialogs/'+props.id} className={classes.a}>{props.name}</NavLink>
        </div>
    )

}

export default DialogItem;