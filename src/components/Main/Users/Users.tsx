import React from "react";
import c from "./Users.module.scss";
import {User} from "../Dialogs/Messages/User/User";
import {SuperButton} from "../../../UniversalComponents/SuperButton/SuperButton";
import {AddFunction} from "../Dialogs/Messages/AddFunction/AddFunction";
import {FormatUserType} from "./UsersContainer";



type UsersType = {
    users: Array<FormatUserType>
    totalUserCount:number,
    pageSize:number,
    currentPage:number,
    setCurrentPage:(pageNumber:number) => void,
    toggleFollowAC:(userId:string) => void,
    showMoreUsers:() => void
}

export const Users: React.FC<UsersType> = (props) => {
    const {
        users,
        totalUserCount,
        pageSize,
        currentPage,
        setCurrentPage,
        toggleFollowAC,
        showMoreUsers,
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
                                followed={u.followed}
                                country={u.country}
                                toggleFollowACForFindUsers={toggleFollowAC}
                            />
                        )
                    })}
                </div>
                <SuperButton
                    name={'show more'}
                    callback={showMoreUsers}
                    addClass={c.center}
                />
            </div>
            <AddFunction/>
        </div>
    )
}