import React from "react";
import c from './Posts.module.scss';
import {Post} from "./Post/Post";
import {Form} from "./Form/Form";
import {ProfilePageType} from "./PostsContainer";

export const Posts = (props: ProfilePageType) => {
    const onAddNewPost = () => {
        props.addPostAC()
    }
    const onChangeTextForNewPost = (m: string) => {
        props.changeTextForNewPostAC(m)
    }
    return (
        <div>
            <div className={c.title}>
                My posts
            </div>
            <Form
                newText={props.newPost}
                addCallback={onAddNewPost}
                changeText={onChangeTextForNewPost}
                nameBtn={'Add'}
            />
            <div className={c.list}>
                {
                    props.posts.map(post => {
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