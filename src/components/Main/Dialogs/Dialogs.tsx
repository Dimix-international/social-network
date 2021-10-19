import React from "react";
import c from'./Dialogs.module.scss'
import {AddFunction} from "./Messages/AddFunction/AddFunction";
import {MessagesContainer} from "./Messages/MessagesContainer";


export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <MessagesContainer />
            <AddFunction />
        </div>
    )
}