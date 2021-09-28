import React from "react";
import c from './ListMessages.module.css'

type UserItemTypeProps = {
    id: string
    text: string
}
export const ListMessages: React.FC<UserItemTypeProps> = (
    {
        id,
        text,
    }) => {
    return (
        <div className={c.text}>{text}</div>
    )
}