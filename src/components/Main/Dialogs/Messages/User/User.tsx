import React from "react";
import c from './User.module.scss'
import {NavLink} from "react-router-dom";

type UserItemTypeProps = {
    trigger: string,
    id: string
    avatar: string
    name?: string
    country?: string
    city?: string
    status?: string
    followed?: boolean,
    addClass?: string
    toggleFollowACForFindUsers?: (userId: string) => void
}
export const User: React.FC<UserItemTypeProps> = (
    {
        trigger,
        id,
        avatar,
        name,
        country,
        city,
        status,
        followed,
        addClass,
        toggleFollowACForFindUsers,
    }) => {
    //---case users---
    const addClassBtnFollowed = followed
        ? `${c.followed} ${c.followed__active}`
        : c.followed;

    const onButtonFollowClickHandler = () => {
        toggleFollowACForFindUsers && toggleFollowACForFindUsers(id);
    }
    //---------

    switch (trigger) {
        case 'dialogs':
            return (
                <NavLink to={`/${trigger}/${id}`}>
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
                        <div className={c.user__date}>
                            01.01.2018
                        </div>
                    </div>
                </NavLink>
            )

        case 'users':
            return (
                <div className={c.user}>
                    <div className={c.user__avatar}>
                        <img
                            src={avatar}
                            alt="avatar"/>
                    </div>
                    <div className={c.user__body}>
                        <div className={c.user__name}>
                            {name}, {country}
                        </div>
                        <div className={c.user__status}>
                            {status} {followed}
                        </div>
                    </div>
                    <button
                        className={addClassBtnFollowed}
                        onClick={onButtonFollowClickHandler}
                    >
                        &#10004;
                    </button>
                </div>
            )

        default:
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
                    </div>
                </NavLink>
            )
    }
}