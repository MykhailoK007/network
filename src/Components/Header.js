import React from "react";
import classes from '../Components/Header.module.css';
import Nav from "./Nav";

function Header(){
    return(
        <header className={classes.header}>
            <img  className={classes.img} src="https://raw.githubusercontent.com/tarkomatas/website/master/img/1.png" alt=""/>
            <Nav/>
    </header>
)
}

export default Header;