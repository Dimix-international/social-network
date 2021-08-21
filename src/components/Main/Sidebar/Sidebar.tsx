import React from "react";
import { NavLink } from "react-router-dom";
import s from './Sidebar.module.scss'

export const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav className={s.menu}>
                <ul className={s.list}>
                    <li>
                        <NavLink to="/profile" className={s.link} activeClassName={s.active}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" className={s.link} activeClassName={s.active}>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" className={s.link} activeClassName={s.active}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music" className={s.link} activeClassName={s.active}>Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="/video" className={s.link} activeClassName={s.active}>Video</NavLink>
                    </li>
                    <li>
                        <a href="#" className={classes.link}>Friends</a>
                    </li>
                </ul>
                <NavLink to={'/settings'} className={`${s.link} ${s.setting}`} activeClassName={s.active}>
                    Settings
                </NavLink>
            </nav>
        </aside>
    )
}