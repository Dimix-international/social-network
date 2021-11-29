import {AppThunkType} from "./redux-store";
import {authApi, profileApi} from "../api/users-api";

type ValueOrNullType = number | string | null;


const initialAuthState = {
    email: null as ValueOrNullType,
    id: null as ValueOrNullType,
    login: null as ValueOrNullType,
    isAuth: false,
    avatar: null as ValueOrNullType,
    error: null as string | null
}

export type AuthStateType = typeof initialAuthState

export type AuthActionType =
    | ReturnType<typeof setUserAuthAC>
    | ReturnType<typeof setErrorAC>

export const authReducer = (state: AuthStateType = initialAuthState, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case "SET_AUTH_USERS":
            return {
                ...state,
                ...action.payload,
            }
        case "SET_AUTH_ERROR":
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

type SetUsersAuthType = {
    type: "SET_AUTH_USERS",
    payload: {
        id: string | null,
        login: string | null,
        email: string | null,
        avatar: string | null
        isAuth: boolean
    }
}
export const setUserAuthAC = (id: string | null, email: string | null, login: string | null,
                              avatar: string | null, isAuth:boolean): SetUsersAuthType => {
    return {
        type: 'SET_AUTH_USERS',
        payload: {id, login, email, avatar, isAuth},
    }
}

export const setUserAuth = (): AppThunkType => async dispatch => {

    try {
        const response = await authApi.getAuth();

        const {id, login, email} = response.data;
        const responseGetProfile = await profileApi.getProfile(id);

        dispatch(setUserAuthAC(id, email, login, responseGetProfile.data.photos.small, true))
    } catch (e) {
        console.warn(e)
    }

}

const setErrorAC =(error:string | null) => {
    return {
        type: 'SET_AUTH_ERROR',
        error,
    } as const
}


export const logInUser = (email:string, password:string, rememberMe:boolean):AppThunkType => async dispatch => {

    setTimeout(() => {
        dispatch(setErrorAC(null))
    },5000)

    try {
        const response = await authApi.signIn(email, password, rememberMe);

        if(response.data.resultCode === 0) {
            dispatch(setErrorAC(null));
            dispatch(setUserAuth())
        } else{
            dispatch(setErrorAC(response.data.messages.length > 0
                ? response.data.messages[0]
                : 'Some error'))
        }

    } catch (e) {
        dispatch(setErrorAC(e.message))
    }

}


export const logOutUser = ():AppThunkType => async dispatch => {

    try {

       const response =  await authApi.signOut();

        if(response.data.resultCode === 0) {
            dispatch(setUserAuthAC(null, null, null, null, false))
        }


    } catch (e) {
        console.warn(e)
    }

}

