import React from "react";
import classes from './Header.module.css';
import Nav from "./Nav/Nav";

function Header() {
    return (
        <header className = {classes.header}>
            <h1 className = {classes.h1}>Logo</h1>
            <Nav/>
        </header>
    )
}

export default Header;