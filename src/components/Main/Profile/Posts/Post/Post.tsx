import React from "react";
import c from './Post.module.scss';

type PostType = {
    id:string
    avatar: string,
    message:string
    likesCount:number
}
export const Post:React.FC<PostType> = ({id,avatar, message, likesCount}) => {
    return (
        <div className={c.item}>
            <div className={c.avatar}>
                <img src={avatar} alt=""/>
            </div>
            <div className={c.message}>
                 <p className={c.text}>{message}</p>
                <span className={c.like}>likes {likesCount}</span>
            </div>
        </div>
    )
}