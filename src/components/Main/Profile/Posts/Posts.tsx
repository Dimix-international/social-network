import React from "react";
import c from './Posts.module.scss';
import {Post} from "./Post/Post";

export const Posts = () => {
    return (
        <div>
            <div className={c.title}>
                My posts
            </div>
            <div className={c.new}>
                Forms
            </div>
            <div className={c.list}>
                <Post
                    avatar={'https://cdnimg.rg.ru/i/gallery/87d52c68/1_9894c58c.jpg'}
                    message={'Good morning Bro!'}
                    likesCount = {10}
                />
            </div>
        </div>
    )
}