import React from "react";
import c from "./Users.module.scss";
import {User} from "../Dialogs/Messages/User/User";
import {AddFunction} from "../Dialogs/Messages/AddFunction/AddFunction";
import {UsersFindPropsType} from "./UsersContainer";


type UsersType = UsersFindPropsType & {
    setCurrentPage:(pageNumber:number) => void
}


export const Users: React.FC<UsersType> = (props) => {
    const {
        users,
        totalUserCount,
        pageSize,
        currentPage,
        setCurrentPage,
        status,
        followingInProgress,
        followingUser
    } = props;


    // Math.ceil - округляем в больш сторону чтобы всех пользователей показать
    let pagesCount = Math.ceil(totalUserCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div className={c.container}>
            <div className={c.users}>
                <div className={c.select}>
                    {pages.map((p, index) => {
                        return (
                            <span
                                key={p}
                                className={currentPage === p
                                    ? `${c.select__item} ${c.active}`
                                    : c.select__item}
                                onClick={() => setCurrentPage(p)}
                            >
                                    {p}
                                </span>
                        )
                    })}
                </div>
                <div>
                    {users.map(u => {
                        return (
                            <User
                                key={u.id}
                                trigger={'users'}
                                id={u.id}
                                name={u.name}
                                avatar={u.avatar}
                                status={u.status}
                                isFollowed={u.followed}
                                country={u.country}
                                followingUser={followingUser}
                            />
                        )
                    })}
                </div>
            </div>
            <AddFunction/>
        </div>
    )
}