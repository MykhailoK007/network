import React from "react";
import classes from './Nav.module.css';
import NavItem from "./NavItem";
function Nav() {
    return(
        <div className={classes.div}>
            <nav className={classes.nav}>
                <NavItem/>
                <NavItem/>
                <NavItem/>

            </nav>

        </div>

    )
}
export  default Nav;