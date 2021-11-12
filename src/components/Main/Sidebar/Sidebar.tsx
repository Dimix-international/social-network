import React from "react";
import {NavLink} from "react-router-dom";
import s from './Sidebar.module.scss'
import {CustomLink} from "./CustomLink";

export const Sidebar = () => {

    return (
        <aside className={s.sidebar}>
            <nav className={s.menu}>

                <ul className={s.list}>
                    <CustomLink to={"/profile"}>Profile</CustomLink>
                    <CustomLink to={"/dialogs"}>Messages</CustomLink>
                    <CustomLink to={"/music"}>Music</CustomLink>
                    <CustomLink to={"/video"}>Video</CustomLink>
                    <CustomLink to={"/news"}>News</CustomLink>
                </ul>
                <CustomLink to={"/users"} addclass={s.users}>Find
                    friends</CustomLink>
                <CustomLink to={"/settings"}
                            addclass={s.setting}>Settings</CustomLink>
                {/*<ul className={s.list}>
                    <li>
                        <NavLink to="/profile"
                                 className={({isActive}) => setActive(isActive)}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs"
                                 className={({isActive}) => setActive(isActive)}>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music"
                                 className={({isActive}) => setActive(isActive)}>Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="/video"
                                 className={({isActive}) => setActive(isActive)}>Video</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news"
                                 className={({isActive}) => setActive(isActive)}>News</NavLink>
                    </li>
                </ul>*/}
                {/*                <NavLink to={"/users"}
                         className={({isActive}) => isActive ? `${s.link} ${s.users} ${s.active}` : `${s.link} ${s.users}`}>
                    Find friends
                </NavLink>
                <NavLink to={'/settings'}
                         className={({isActive}) => isActive ? `${s.link} ${s.setting} ${s.active}` : `${s.link} ${s.users}`}>
                    Settings
                </NavLink>*/}
            </nav>
        </aside>
    )
}