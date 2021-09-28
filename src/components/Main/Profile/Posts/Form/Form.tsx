import React, {ChangeEvent, useState} from "react";
import c from './Form.module.scss';
import {SuperButton} from "../../../../../UniversalComponents/SuperButton/SuperButton";

type FormPropsType = {
    newText:string
    addCallback: () => void
    changeText: (text:string) => void
    placeHolderTextarea?: string
    nameBtn:string
    classBtn?:string
}

export const Form = (props:FormPropsType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeText(e.currentTarget.value)
    }
    const addPost  = () => {
        props.addCallback();
    }
    const finalPlaceHolder = props.placeHolderTextarea ? props.placeHolderTextarea : '';
    return (
        <div className={c.form}>
            <textarea
                value={props.newText}
                onChange={onChangeHandler}
                placeholder={finalPlaceHolder}
            >
            </textarea>
            <SuperButton addClass={props.classBtn} name={props.nameBtn} callback={addPost} />
        </div>
    )
}