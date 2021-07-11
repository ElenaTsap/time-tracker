import {NavLink} from "react-router-dom";
import './Navbar.css'
import React from 'react'
import {ContextCreator} from '../MyContext'
import {useContext} from 'react'

const Navbar = () => {
    const context = useContext(ContextCreator);

    const stylesMode = context.checked ? 'nav-item-dark': 'nav-item';
    const activeMode = context.checked ? 'active-dark': 'active';

    return (
        <nav>
            <NavLink 
                exact
                className = {stylesMode}
                activeClassName = {activeMode}
                to = "/projects"
            >
                Projects
            </NavLink>
            <NavLink 
                exact
                className = {stylesMode}
                activeClassName = {activeMode}
                to = "/logs"
            >
                Logs
            </NavLink>
            <NavLink 
                exact
                className = {stylesMode}
                activeClassName = {activeMode}
                to = "/charts"
            >
                Charts
            </NavLink>
        </nav>
    )
}

export default Navbar
