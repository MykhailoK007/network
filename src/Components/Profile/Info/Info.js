import React from "react";

import classes from './Info.module.css';
import ProfileStatus from "../../ProfileStatus";



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
            <ProfileStatus status={props.aboutMe}/>
        </div>
    </div>
)
}

export default Info;