import React from "react";

import classes from './Info.module.css';
function Info() {
return(
    <div className = {classes.body}>
        <div className = {classes.avatar}>
            <img src = 'http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg'  alt = "" className = {classes.img}/>
        </div>
        <div className = {classes.personalInformation}>
                <div className = {classes.userName}>My Name</div>
            <div>Date of Birth</div>
        </div>
    </div>
)
}
export default Info;