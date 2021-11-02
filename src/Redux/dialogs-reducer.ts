import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = 'SEND-MESSAGE';

export type UserType = {
    id: string,
    name: string,
    avatar: string,
}
export type MessagesType = {
    id: string,
    text: string,
}
export type DialogPagePropsType = {
    users: Array<UserType>
    messages: Array<MessagesType>
    newMessageBody: string
}
const initialState: DialogPagePropsType = {
    users: [
        {
            id: '1',
            name: 'Виктория',
            avatar: 'https://sun9-66.userapi.com/impf/c849416/v849416852/3a443/xsodDNV8TOI.jpg?size=1440x2160&quality=96&sign=b9a6c8635ac2a27611c2c43e9b649f41&type=album',
        },
        {
            id: '2',
            name: 'Надежда',
            avatar: 'https://sun9-16.userapi.com/impg/r-6qElO8ajYvMAhmGgAvxFmcpEJ7PJboimUTaw/HKyCCEICJKk.jpg?size=1986x2160&quality=96&sign=c8f187aec9ed868da888ac86635ae5c4&type=album',
        },
        {
            id: '3',
            name: 'Виктор',
            avatar: 'https://sun9-15.userapi.com/impg/xTFaSW2TnC7k1Bkfizu3hbXYBXM97pkP_6mk2Q/QYjIVNyn6TE.jpg?size=954x1702&quality=96&sign=21a6d5b7f0ef8c51eedb6ef5fd249c81&type=album',
        },
        {
            id: '4',
            name: 'Игорь',
            avatar: 'https://sun9-50.userapi.com/impf/c624928/v624928528/3cd50/cYNhi-4qQto.jpg?size=1000x1500&quality=96&sign=40f8079ee68f8321ec63a070c84c78f6&type=album',
        },
    ],
    messages: [
        {
            id: '1',
            text: 'Привет всем',
        },
        {
            id: '2',
            text: 'Привет от меня',
        },
        {
            id: '3',
            text: 'И я шлю всем привет',
        },
        {
            id: '4',
            text: 'И от от меня',
        },
    ],
    newMessageBody: '',
}

export type DialogsActionType = UpdateNewMessageBodyType | SendMessageType;

export const dialogsReducer = (state: DialogPagePropsType = initialState, action: DialogsActionType): DialogPagePropsType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {...state, newMessageBody: action.message}
        case "SEND-MESSAGE":
            const newMessage: MessagesType = {
                id: v1(),
                text: state.newMessageBody
            }
            return {...state, messages: [...state.messages, newMessage], newMessageBody: ''}
        default:
            return state
    }
}
export type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC = (message: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        message
    } as const
}
export type SendMessageType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)