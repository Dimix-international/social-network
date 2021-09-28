import {v1} from "uuid";
import {AddPostType, ChangeTextForNewPostType, profileReducer} from "./profile-reducer";
import {dialogsReducer, SendMessageType, UpdateNewMessageBodyType} from "./dialogs-reducer";

export type UserType = {
    id: string,
    name: string,
    avatar: string,
}
export type MessagesType = {
    id: string,
    text: string,
}
export type PostPropsType = {
    id: string
    avatar: string,
    message: string
    likesCount: number
}
export type DialogPagePropsType = {
    users: Array<UserType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type ProfilePagePropsType = {
    textForNewPost: string
    posts: Array<PostPropsType>
}
export type StatePropsType = {
    dialogsPage: DialogPagePropsType,
    profilePage: ProfilePagePropsType
}

export type StoreType = {
    _state: StatePropsType
    subscribe: (observer: () => void) => void
    _onChange: () => void
    getState: () => StatePropsType
    dispatch: (action: ActionType) => void
}


export type ActionType = AddPostType | ChangeTextForNewPostType
    | UpdateNewMessageBodyType| SendMessageType;
export const store: StoreType = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            textForNewPost: '',
            posts: [
                {
                    id: v1(),
                    avatar: 'https://cdnimg.rg.ru/i/gallery/87d52c68/1_9894c58c.jpg',
                    message: 'Hi bro!',
                    likesCount: 10
                },
                {
                    id: v1(),
                    avatar: 'https://cdnimg.rg.ru/i/gallery/87d52c68/1_9894c58c.jpg',
                    message: 'Good day!',
                    likesCount: 125
                },
            ]
        }
    },
    subscribe(observer) {
        //observer - функция callback -rerenderEntireTree из index.tsx
        this._onChange = observer;
    },
    _onChange() {
        console.log('state changed')
    },
    getState() { //чтобы получать state и работать с ним т.к. _state - приватное свойство
        return this._state
    },


    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._onChange();
    }
}