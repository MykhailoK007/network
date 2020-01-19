import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import ShowDialog from "./ShowDialog/ShowDialog";
import {Route} from "react-router-dom";
function Dialog(props){

    return(
        <div className={classes.dialog}>
            {
                props.dialog.map(elem=>{
                return <DialogItem name={elem.name} id={elem.id} key={elem.id}/>
                })
            }
        </div>
    )
}



function Dialogs(props){
    return (
        <div className={'container ' + classes.body}>
            <Dialog dialog={props.dialogs.dialog}/>

            {
                props.dialogs.dialog.map(elem=>{
                  return  <Route exact path={'/Dialogs/'+elem.id} key={elem.id} render={()=>
                      <ShowDialog element={elem} dispatch={props.dispatch}
                                  textMessage={props.dialogs.newMessageText}  /> }/>
                })
            }


        </div>
    )
}
export default Dialogs;