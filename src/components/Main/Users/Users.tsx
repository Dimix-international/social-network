import React from "react";
import c from "./Users.module.scss";
import {User} from "../Dialogs/Messages/User/User";
import {AddFunction} from "../Dialogs/Messages/AddFunction/AddFunction";
import {UsersFindPropsType} from "./UsersContainer";
import {FilterSearchUsersType} from "../../../Redux/users-reducer";
import {SuperLoading} from "../../../UniversalComponents/Loading/SuperLoading";
import {PaginationAdvance} from "./Pagination/PG/PaginationAdvance";
import {UsersSearchForm} from "./UsersSearchFrom";


type UsersPropsType = UsersFindPropsType & {
    onFilterChanged: (filter: FilterSearchUsersType) => void
    setCurrentPage: (pageNumber: number) => void
}


export const Users: React.FC<UsersPropsType> = React.memo((props) => {
    const {
        users,
        totalUserCount,
        pageSize,
        followingUser,
        isFetching,
        currentPage,
        setCurrentPage,
        filter,
        onFilterChanged,
    } = props;

    console.log('u')

    // Math.ceil - округляем в больш сторону чтобы всех пользователей показать
    let pagesCount = Math.ceil(totalUserCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={c.container}>

            <div className={c.users}>
                {
                    isFetching
                        ? <SuperLoading/>
                        : <>
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
                            <UsersSearchForm
                                onFilterChanged={onFilterChanged}
                                filter={filter}
                            />
                            <PaginationAdvance
                                totalUser={totalUserCount}
                                pageSize={pageSize}
                                pageCurrent={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </>
                }
            </div>
            <AddFunction/>
        </div>
    )
})



