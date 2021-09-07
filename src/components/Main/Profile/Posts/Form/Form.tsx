import React, {ChangeEvent, useState} from "react";
import c from './Form.module.scss';

type FormPropsType = {
    newPost:string
    addPost: () => void
    changeTextForNewPost: (text:string) => void
}

export const Form = (props:FormPropsType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeTextForNewPost(e.currentTarget.value)
    }
    const addPost  = () => {
        props.addPost();
    }
    return (
        <div className={c.form}>
            <textarea
                value={props.newPost}
                onChange={onChangeHandler}
            >
            </textarea>
            <button onClick={addPost}>Add</button>
        </div>
    )
}