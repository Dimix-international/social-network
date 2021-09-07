import React from "react";
import c from './Posts.module.scss';
import {Post} from "./Post/Post";
import {Form} from "./Form/Form";
import {ActionType, addPostAC, changeTextForNewPostAC, PostPropsType} from "../../../../Redux/state";

type TypePosts = {
    posts: Array<PostPropsType>
    newPost:string
    dispatch:(action:ActionType) => void
}
export const Posts = (props: TypePosts) => {
    const addNewPost = () => {
        props.dispatch(addPostAC())
    }
    const changeTextForNewPost = (m:string) => {
        props.dispatch(changeTextForNewPostAC(m))
    }
    return (
        <div>
            <div className={c.title}>
                My posts
            </div>
            <Form
                newPost={props.newPost}
                addPost={addNewPost}
                changeTextForNewPost={changeTextForNewPost}
            />
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