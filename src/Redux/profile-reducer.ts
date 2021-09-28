import {v1} from "uuid";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_FOR_NEW_POST = "CHANGE-TEXT-FOR-NEW-POST";


/*export type ProfilePagePropsType = {
    textForNewPost: string
    posts: Array<PostPropsType>
}
const initialState:ProfilePagePropsType = {
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
}*/
export type PostPropsType = {
    id: string
    avatar: string,
    message: string
    likesCount: number
}
//2 вариант типизации редьюсера
const initialState = {
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
    ] as Array<PostPropsType>,
}
export type InitialProfileStateType = typeof initialState

type ActionType = AddPostType | ChangeTextForNewPostType;
export const profileReducer = (state:InitialProfileStateType = initialState, action:ActionType):InitialProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostPropsType = {
                id: v1(),
                avatar: 'https://cdnimg.rg.ru/i/gallery/87d52c68/1_9894c58c.jpg',
                message: state.textForNewPost,
                likesCount: 0
            }
            return {
                ...state, posts: [...state.posts, newPost], textForNewPost: state.textForNewPost = ''
            }
        case "CHANGE-TEXT-FOR-NEW-POST":
            return {...state, textForNewPost: action.message}
        default:
            return state
    }
}
export type AddPostType = ReturnType<typeof addPostAC>;
export type ChangeTextForNewPostType = ReturnType<typeof changeTextForNewPostAC>;
export const addPostAC = () => ({type: ADD_POST} as const);
export const changeTextForNewPostAC = (message: string) => {
    return {
        type: CHANGE_TEXT_FOR_NEW_POST,
        message
    } as const
}