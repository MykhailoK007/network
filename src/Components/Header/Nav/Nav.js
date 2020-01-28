import React from "react";
import classes from './Nav.module.css';
import NavItem from "./NavItem/NavItem";
function Nav() {
    return(
        <div className = {classes.div}>
            <nav className = {classes.nav}>
                <NavItem text = 'Profile' />
                <NavItem text = 'Users'/>
                <NavItem text = 'Dialogs'/>
                <NavItem text = 'News'/>

            </nav>

        </div>

    )
}
export  default Nav;