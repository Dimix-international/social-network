import React from "react";
import c from './Messages.module.scss'
import {User} from "./User/User";
import {UserType} from "../../../../Redux/state";

type MessagesPropsType = {
    users: Array<UserType>
}
export const Messages = (props: MessagesPropsType) => {
    return (
        <div className={c.messages}>
            {
                props.users.map(user => {
                    return (
                        <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            avatar={user.avatar}
                            text={user.text}
                            time={user.time}
                        />
                    )
                })
            }
        </div>
    )
}