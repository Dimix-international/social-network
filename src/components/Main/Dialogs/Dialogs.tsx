import React from "react";
import c from'./Dialogs.module.scss'
import {Messages} from "./Messages/Messages";
import {AddFunction} from "./Messages/AddFunction/AddFunction";
import {DialogPagePropsType} from "../../../Redux/state";

export type DialogsPropsType = {
    dialogsPage: DialogPagePropsType,
}
export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage}) => {
    return (
        <div className={c.dialogs}>
            <Messages
                users={dialogsPage.users}
            />
            <AddFunction />
        </div>
    )
}