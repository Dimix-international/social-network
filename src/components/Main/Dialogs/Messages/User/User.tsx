import React from "react";
import c from './User.module.scss'
import {NavLink} from "react-router-dom";

type UserItemTypeProps = {
    id: string
    name: string
    avatar: string
    text: string
    time:string
}
export const User: React.FC<UserItemTypeProps> = (
    {
        id,
        name,
        avatar,
        text,
        time
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
                    <div className={c.user__text}>
                        {text}
                    </div>
                </div>
                <div className={c.user__date}>{time}</div>
            </div>
        </NavLink>
    )
}