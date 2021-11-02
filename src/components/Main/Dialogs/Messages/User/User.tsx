import React from "react";
import c from './User.module.scss'
import {NavLink} from "react-router-dom";
import {followApi} from "../../../../../api/users-api";
import {RequestStatusType} from "../../../../../app/app-reducer";


type UserItemTypeProps = {
    trigger: string,
    id: string
    avatar: string
    name?: string
    country?: string
    city?: string
    status?: string
    isFollowed?: boolean,
    addClass?: string
    toggleFollowACForFindUsers?: (userId: string) => void,
    statusLoading?: RequestStatusType,
    setStatusLoading?: (status: RequestStatusType) => void
    followingInProgress?: Array<string>
    followingUser?: (id: string, isFetching: boolean,) => void
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
        isFollowed,
        addClass,
        followingInProgress,
        followingUser,
    }) => {
    //---case users---
    const addClassBtnFollowed = isFollowed
        ? `${c.followed} ${c.followed__active}`
        : c.followed;

    const onButtonFollowClickHandler = () => {
        if (!isFollowed) {
            followingUser && followingUser(id, true)
        } else {
            followingUser && followingUser(id, false)
        }
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
                    <NavLink
                        to={`/profile/${id}`}>
                        <div className={c.user__avatar}>
                            <img
                                src={avatar}
                                alt="avatar"/>
                        </div>
                    </NavLink>
                    <div className={c.user__body}>
                        <NavLink className={c.user__info}
                            to={`/profile/${id}`}>
                            <div className={c.user__name}>
                                {name}, {country}
                            </div>
                            <div className={c.user__status}>
                                {status} {isFollowed}
                            </div>
                        </NavLink>
                    </div>
                    <button
                        disabled={followingInProgress && followingInProgress.some(elId => elId === id)}
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