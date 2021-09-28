import React from "react";
import c from './Posts.module.scss';
import {Post} from "./Post/Post";
import {Form} from "./Form/Form";
import {PostsPropsType} from "./PostsContainer";

/*type TypePosts = {
    posts: Array<PostPropsType>
    newPost: string
    addPost: () => void
    changeText: (m: string) => void
}*/
export const Posts = (props: PostsPropsType) => {
    const onAddNewPost = () => {
        props.addPost()
    }
    const onChangeTextForNewPost = (m: string) => {
        props.changeText(m)
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
                    props.posts.posts.map(post => {
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