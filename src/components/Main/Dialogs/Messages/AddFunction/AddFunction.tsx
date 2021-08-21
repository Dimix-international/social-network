import React from "react";
import c from './AddFunction.module.scss'

export const AddFunction = () => {
    return (
        <div className={c.addFunction}>
            <div className={c.addFunction__item}>Все чаты</div>
            <div className={c.addFunction__item}>Непрочитанные</div>
            <div className={c.addFunction__item}>Важные сообщения</div>
        </div>
    )
}