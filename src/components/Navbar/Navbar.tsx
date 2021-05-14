import React from "react";
import { NavLink } from "react-router-dom";
import nav from "./Navbar.module.css";

type NavbarPropsType = {
    state: {
        friends:{name:string,avatar:string}[],
    }
}

const Navbar = (props: NavbarPropsType) => {

    let friendsName = props.state.friends.map((f:{name:string,avatar:string}) => <li><img className={nav.friendsAvatar} src={f.avatar} alt=""/><p className={nav.friendsName}>{f.name}</p></li>)

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
            <div>
                <h3>Friends</h3>
                <div>
                    <ul className={nav.friendsList}>
                        {friendsName}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;