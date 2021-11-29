import s from './TextError.module.css'
import React from "react";

type TextErrorType = {}
export const TextError:React.FC<TextErrorType> = React.memo(props => {
    return (
        <div className={s.error}>{props.children}</div>
    )
})