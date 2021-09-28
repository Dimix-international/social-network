import React from "react";
import c from'./Dialogs.module.scss'
import {Messages} from "./Messages/Messages";
import {AddFunction} from "./Messages/AddFunction/AddFunction";
import {ActionType, DialogPagePropsType} from "../../../Redux/store";
import {MessagesContainer} from "./Messages/MessagesContainer";
import {Store} from "redux";
import {RootReducerType} from "../../../Redux/redux-store";


export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <MessagesContainer />
            <AddFunction />
        </div>
    )
}