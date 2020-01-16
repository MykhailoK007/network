import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import ShowDialog from "./ShowDialog/ShowDialog";
function Dialog(props){
    return(
        <div className={classes.dialog}>
            {
                props.dialogs.map(elem=>{
                return <DialogItem name={elem.name} id={elem.id} key={elem.id}/>
                })
            }
        </div>
    )
}



function Dialogs(props){
    let messageRef=React.createRef();
    function sendMessage() {
        let text=messageRef.current.value;
        console.log(text);
    }
    return (
        <div className={'container '+ classes.body}>
                <Dialog dialogs={props.dialogs} />
                <ShowDialog/>
                <div className={classes.createMeassage}>
            <textarea ref={messageRef} className={classes.textarea}/>
       <br/>
            <button  className={classes.button} onClick={sendMessage}>ADD</button>
                </div>
        </div>
    )
}
export default Dialogs;