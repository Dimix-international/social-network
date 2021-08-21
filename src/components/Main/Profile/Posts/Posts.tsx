import React from "react";
import c from './Posts.module.scss';
import {Post} from "./Post/Post";
import {Form} from "./Form/Form";
import {PostPropsType} from "../../../../Redux/state";

type TypePosts = {
    posts: Array<PostPropsType>
}
export const Posts = (props: TypePosts) => {
    return (
        <div>
            <div className={c.title}>
                My posts
            </div>
            <Form />
            <div className={c.list}>
                {
                    props.posts.map (post => {
                        return (
                            <Post
                                key={post.id}
                                id={post.id}
                                avatar={post.avatar}
                                message={post.message}
                                likesCount={post.likesCount}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}