import React from "react";
import c from './Messages.module.scss'
import {User} from "./User/User";
import {ListMessages} from "./User/ListMessages/ListMessages";
import {Form} from "../../Profile/Posts/Form/Form";
import {MessagesContainerPropsType} from "./MessagesContainer";


export const Messages = React.memo((props: MessagesContainerPropsType) => {

    const {
        dialogs,
        sendMessageAC,
        updateNewMessageBodyAC
    } = props;

    const addNewMessage = () => {
        sendMessageAC();
    }
    const changeTextForNewMessage = (message: string) => {
        updateNewMessageBodyAC(message);
    }

    return (
        <div>
            <div className={c.messages}>
                <div>
                    {
                        dialogs.users.map(user => {
                            return (
                                <User
                                    trigger={'dialogs'}
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
})