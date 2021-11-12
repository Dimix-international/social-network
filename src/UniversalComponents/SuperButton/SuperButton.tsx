import React from "react";
import c from './SuperButton.module.scss'

type SuperButtonPropsType =  {
    name:string
    callback?:() => void
    addClass?:string
    disableParams?: boolean
}
export const SuperButton = (props:SuperButtonPropsType) => {
    const onClickHandler = () => {
        props.callback && props.callback()
    }

    const finalClass = props.addClass ? `${c.button} ${props.addClass}` : c.button;
    return (
        <>
            <button
                disabled={props.disableParams && props.disableParams}
                className={finalClass}
                onClick={onClickHandler}>{props.name}
            </button>
        </>
    )
}