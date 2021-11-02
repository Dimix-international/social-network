import {v1} from "uuid";
import {GetProfileResponseType, profileApi} from "../api/users-api";
import {AppThunkType} from "./redux-store";
import {setStatusAppAC} from "../app/app-reducer";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_FOR_NEW_POST = "CHANGE-TEXT-FOR-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE ";


export type PostPropsType = {
    id: string
    avatar: string,
    message: string,
    likesCount: number,
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
    profile: {
        aboutMe: '',
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: '',
        userId: 0,
        photos: {
            small: null,
            large: null,
        }
    } as GetProfileResponseType
}
export type InitialProfileStateType = typeof initialState

export type ProfileActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof changeTextForNewPostAC>
    | ReturnType<typeof setUserProfileAC>

export const profileReducer = (state: InitialProfileStateType = initialState, action: ProfileActionType): InitialProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostPropsType = {
                id: v1(),
                avatar: 'https://cdnimg.rg.ru/i/gallery/87d52c68/1_9894c58c.jpg',
                message: state.textForNewPost,
                likesCount: 0
            }
            return {
                ...state, posts: [...state.posts, newPost], textForNewPost: ''
            }
        case "CHANGE-TEXT-FOR-NEW-POST":
            return {...state, textForNewPost: action.message}
        case "SET_USER_PROFILE ":
            return {...state, profile: action.profile}

        default:
            return state
    }
}
export type AddPostType = ReturnType<typeof addPostAC>
export const addPostAC = () => ({type: ADD_POST} as const);

export type ChangeTextForNewPostType = ReturnType<typeof changeTextForNewPostAC>
export const changeTextForNewPostAC = (message: string) => {
    return {
        type: CHANGE_TEXT_FOR_NEW_POST,
        message
    } as const
}

export const setUserProfileAC = (profile: GetProfileResponseType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const setUserProfile = (id: string): AppThunkType => async dispatch => {

    dispatch(setStatusAppAC('loading'));

    try {
        const response = await profileApi.getProfile(id);
        dispatch(setUserProfileAC(response.data));
        dispatch(setStatusAppAC('succeeded'));

    } catch (e) {
        console.warn(e);
        dispatch(setStatusAppAC('failed'));
    }
}