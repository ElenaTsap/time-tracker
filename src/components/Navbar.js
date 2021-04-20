import {NavLink} from "react-router-dom";
import './Navbar.css'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <NavLink 
                exact
                className = "nav-item"
                activeClassName = "active"
                to = "/projects"
            >
                Projects
            </NavLink>
            <NavLink 
                exact
                className = "nav-item"
                activeClassName = "active"
                to = "/logs"
            >
                Logs
            </NavLink>
            <NavLink 
                exact
                className = "nav-item"
                activeClassName = "active"
                to = "/charts"
            >
                Charts
            </NavLink>
        </nav>
    )
}

export default Navbar
