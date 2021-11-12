import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './EditableSpan.module.scss'
import {SuperButton} from "../SuperButton/SuperButton";
import "boxicons"
import {RequestStatusType} from "../../app/app-reducer";
import {useClickOutside} from "../../helper/UseClickOutside";

type EditableSpanPropsType = {
    statusText: string
    statusLoading: RequestStatusType,
    callback?: (title: string) => void
    addClass?: string
}


export const EditableSpan: React.FC<EditableSpanPropsType> = React.memo(props => {

    const {statusText, statusLoading, callback} = props;
    const [tempStatus, setTempStatus] = useState(statusText)
    const [editMode, setEditMode] = useState(false);

    const changeTempStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setTempStatus(e.currentTarget.value)
    }

    const turnOnEditMode = () => {
        setEditMode(true);
        setTempStatus(statusText);
    }

    const turnOffEditMode = () => {
        setEditMode(false);
    }

    const setStatusUser = () => {
        callback && callback(tempStatus);
        setEditMode(false);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            callback && callback(tempStatus);
            setEditMode(false);
        }
    }


    const statusNodeRef = useClickOutside(() => {
        //закрываем меню при клике снаружи
        setEditMode(false);
    })

    const statusFinallyClass = editMode ? `${s.hide} ${s.status}` : s.status;
    const finallyColorStatusClass = statusText === null ? s.status : `${s.status} ${s.active} `
    return (
        <div ref={statusNodeRef} tabIndex={0} onKeyPress={onKeyPressHandler}
             className={s.content}>
            {editMode &&
            <div className={s.edit}>
                <input
                    onChange={changeTempStatus}
                    onKeyPress={onKeyPressHandler}
                    autoFocus
                    className={s.input}
                    value={tempStatus}/>
                <SuperButton
                    disableParams={statusLoading && statusLoading === 'loading'}
                    callback={() => setStatusUser()}
                    name={'save'}/>
                <SuperButton
                    disableParams={statusLoading && statusLoading === 'loading'}
                    addClass={s.cancelBtn}
                    callback={() => turnOffEditMode()}
                    name={'exit'}/>
            </div>
            }
            <span
                className={`${statusFinallyClass} ${finallyColorStatusClass}`}
                onDoubleClick={turnOnEditMode}>
                {statusText === null ? 'установить статус' : statusText}
            </span>
        </div>
    )
})

