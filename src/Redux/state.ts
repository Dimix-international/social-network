import {v1} from "uuid";

export type UserType = {
    id: string,
    name: string,
    avatar: string,
    text: string,
    time: string
}
export type PostPropsType = {
    id: string
    avatar: string,
    message: string
    likesCount: number
}
export type DialogPagePropsType = {
    users: Array<UserType>
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


export type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof changeTextForNewPostAC>;
export const store: StoreType = {
    _state: {
        dialogsPage: {
            users: [
                {
                    id: v1(),
                    name: 'Виктория',
                    avatar: 'https://sun9-66.userapi.com/impf/c849416/v849416852/3a443/xsodDNV8TOI.jpg?size=1440x2160&quality=96&sign=b9a6c8635ac2a27611c2c43e9b649f41&type=album',
                    text: 'Господа, высокое качество позиционных исследований не даёт нам иного выбора, кроме определения\n' +
                        '                        стандартных подходов. В своём стремлении улучшить пользовательский опыт мы упускаем, что\n' +
                        '                        сделанные на базе интернет-аналитики выводы объединены в целые кластеры себе подобных. Приятно,\n' +
                        '                        граждане, наблюдать, как стремящиеся вытеснить традиционное производство, нанотехнологии\n' +
                        '                        ограничены исключительно образом мышления. Идейные соображения высшего порядка, а также\n' +
                        '                        разбавленное изрядной долей эмпатии, рациональное мышление играет определяющее значение для\n' +
                        '                        анализа существующих паттернов поведения. ',
                    time: new Date().toLocaleTimeString()
                },
                {
                    id: v1(),
                    name: 'Надежда',
                    avatar: 'https://sun9-16.userapi.com/impg/r-6qElO8ajYvMAhmGgAvxFmcpEJ7PJboimUTaw/HKyCCEICJKk.jpg?size=1986x2160&quality=96&sign=c8f187aec9ed868da888ac86635ae5c4&type=album',
                    text: 'Привет привет!',
                    time: new Date().toLocaleTimeString()
                }
            ],
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


    dispatch(action: ActionType) {
        switch (action.type) {
            case "ADD-POST":
                const newPost: PostPropsType = {
                    id: v1(),
                    avatar: 'https://cdnimg.rg.ru/i/gallery/87d52c68/1_9894c58c.jpg',
                    message: this._state.profilePage.textForNewPost,
                    likesCount: 0
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.textForNewPost = '';
                this._onChange(); //вызов перерисовки
                return
            case "CHANGE-TEXT-FOR-NEW-POST":
                this._state.profilePage.textForNewPost = action.message;
                this._onChange();
                return
            default:
                return this._state
        }
    }
}

export const addPostAC = () => ({type: 'ADD-POST'} as const);

export const changeTextForNewPostAC = (message: string) => {
    return {
        type: 'CHANGE-TEXT-FOR-NEW-POST',
        message
    } as const
}