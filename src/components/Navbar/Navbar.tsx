import React from "react";
import { NavLink } from "react-router-dom";
import nav from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={nav.nav}>
            <ul>
                <li className={nav.item}>
                    <NavLink to="/profile" activeClassName={nav.activeLink}>Profile</NavLink>
                </li>
                <li className={nav.item}>
                    <NavLink to="/dialogs" activeClassName={nav.activeLink}>Messages</NavLink>
                </li>
                <li className={nav.item}>
                    <NavLink to="/news" activeClassName={nav.activeLink}>News</NavLink>
                </li>
                <li className={nav.item}>
                    <NavLink to="/music" activeClassName={nav.activeLink}>Music</NavLink>
                </li>
            </ul>
            <div className={nav.item}>
                <NavLink to="/settings" activeClassName={nav.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;