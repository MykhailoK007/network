import React from "react";

import classes from './Info.module.css';
function Info(props) {
return(
    <div className = {classes.body}>
        <div className = {classes.avatar}>

            <img src = {props.photo ? props.photo :
                'http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg'}
                 alt = "" className = {classes.img}/>
        </div>
        <div className = {classes.personalInformation}>
                <div className = {classes.userName}>{props.fullName}</div>
            <div>About Me: <br/>{props.aboutMe}</div>
        </div>
    </div>
)
}
export default Info;