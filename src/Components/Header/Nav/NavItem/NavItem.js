import React from "react";
import classes from './NavItem.module.css';
import {NavLink} from 'react-router-dom';

function NavItem(props) {
    return (
        <div className = {classes.div}>

            <NavLink to = {'/' + props.text} className = {classes.a}> {props.text}</NavLink>
        </div>

    )
}

export default NavItem;