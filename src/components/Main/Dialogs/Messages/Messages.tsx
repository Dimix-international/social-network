import React from "react";
import c from './Messages.module.scss'
import {User} from "./User/User";
import {ListMessages} from "./User/ListMessages/ListMessages";
import {Form} from "../../Profile/Posts/Form/Form";
import {MessagesPropsType} from "./MessagesContainer";

/*type MessagesPropsType = {
    dialogs: DialogPagePropsType
    addMessage:() => void
    changeTextForNewMessage:(text:string) => void
}*/
export const Messages = (props: MessagesPropsType) => {
    const addNewMessage = () => {
        props.addMessage();
    }
    const changeTextForNewMessage = (message: string) => {
        props.changeTextForNewMessage(message)
    }
    return (
        <div>
            <div className={c.messages}>
                <div>
                    {
                        props.dialogs.users.map(user => {
                            return (
                                <User
                                    key={user.id}
                                    id={user.id}
                                    name={user.name}
                                    avatar={user.avatar}
                                />
                            )
                        })
                    }
                </div>
                <div>
                    {
                        props.dialogs.messages.map(m => {
                            return (
                                <ListMessages
                                    key={m.id}
                                    id={m.id}
                                    text={m.text}
                                />
                            )
                        })
                    }
                </div>
                <div className={c.form}>
                    <Form
                        newText={props.dialogs.newMessageBody}
                        addCallback={addNewMessage}
                        changeText={changeTextForNewMessage}
                        nameBtn={'Send'}
                        placeHolderTextarea={'Enter new message'}
                        classBtn={c.btn}
                    />
                </div>
            </div>
        </div>
    )
}