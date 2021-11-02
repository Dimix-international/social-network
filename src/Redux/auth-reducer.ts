import {AppThunkType} from "./redux-store";
import {authApi, profileApi} from "../api/users-api";

type ValueOrNullType = number | string | null;


const initialAuthState = {
    email: null as ValueOrNullType,
    id: null as ValueOrNullType,
    login: null as ValueOrNullType,
    isAuth: false,
    avatar: null as ValueOrNullType,
}

export type AuthStateType = typeof initialAuthState

export type AuthActionType =
    | ReturnType<typeof setUserAuthAC>


export const authReducer = (state: AuthStateType = initialAuthState, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case "SET_AUTH_USERS":
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

type SetUsersAuthType = {
    type: "SET_AUTH_USERS",
    payload: {
        userId: string,
        login: string,
        email: string,
        avatar: string | null
    }
}
export const setUserAuthAC = (userId: string, email: string, login: string, avatar: string | null): SetUsersAuthType => {
    return {
        type: 'SET_AUTH_USERS',
        payload: {userId, login, email, avatar},
    }
}

export const setUserAuth = (): AppThunkType => async dispatch => {

    try {
        const response = await authApi.getAuth();

        const {id, login, email} = response.data;
        const responseGetProfile = await profileApi.getProfile(id);

        dispatch(setUserAuthAC(id, email, login, responseGetProfile.data.photos.small))
    } catch (e) {
        console.warn(e)
    }

}

