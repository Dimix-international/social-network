import React from "react";
import classes from './Sidebar.module.scss'

export const Sidebar = () => {
    return (
        <aside className={classes.sidebar}>
            <nav className={classes.menu}>
                <ul className={classes.list}>
                    <li>
                        <a href="#" className={classes.link}>Profile</a>
                    </li>
                    <li>
                        <a href="#" className={classes.link}>Messages</a>
                    </li>
                    <li>
                        <a href="#" className={classes.link}>News</a>
                    </li>
                    <li>
                        <a href="#" className={classes.link}>Music</a>
                    </li>
                    <li>
                        <a href="#" className={classes.link}>Friends</a>
                    </li>
                </ul>
                <a href={'#'} className={`${classes.link} ${classes.setting}`}>
                    Settings
                </a>
            </nav>
        </aside>
    )
}