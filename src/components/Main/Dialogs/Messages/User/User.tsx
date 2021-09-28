import React from "react";
import c from './User.module.scss'
import {NavLink} from "react-router-dom";

type UserItemTypeProps = {
    id: string
    name: string
    avatar: string
}
export const User: React.FC<UserItemTypeProps> = (
    {
        id,
        name,
        avatar,
    }) => {
    return (
        <NavLink to={`/dialogs/${id}`}>
            <div className={c.user}>
                <div className={c.user__avatar}>
                    <img
                        src={avatar}
                        alt="avatar"/>
                </div>
                <div className={c.user__body}>
                    <div className={c.user__name}>
                        {name}
                    </div>
                </div>
                <div className={c.user__date}>01.01.2021</div>
            </div>
        </NavLink>
    )
}