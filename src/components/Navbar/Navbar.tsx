import nav from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={nav.nav}>
            <ul>
                <li className={nav.item}>
                    <a href="/profile">Profile</a>
                </li>
                <li className={nav.item}>
                    <a href="/dialogs">Messages</a>
                </li>
                <li className={nav.item}>
                    <a href="">News</a>
                </li>
                <li className={nav.item}>
                    <a href="">Music</a>
                </li>
            </ul>
            <div className={nav.itemSettings}>
                <a href="">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;