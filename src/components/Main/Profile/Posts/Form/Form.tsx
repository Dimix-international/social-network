import React from "react";
import c from './Form.module.scss';


export const Form = () => {
    return (
        <div className={c.form}>
            <textarea></textarea>
            <button>Add</button>
        </div>
    )
}