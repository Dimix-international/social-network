import {AppThunkType} from "../Redux/redux-store";
import {setUserAuth} from "../Redux/auth-reducer";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

const initialState = {
    status: 'idle' as RequestStatusType,
    isInitialized: false,
}

export type AppInitialStateType = typeof initialState
export type AppActionType =
    | ReturnType<typeof setStatusAppAC>
    | ReturnType<typeof setInitializedAppAC>

export const appReducer = (state: AppInitialStateType = initialState, action: AppActionType): AppInitialStateType => {
    switch (action.type) {
        case "SET_APP_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "SET_INITIALIZED_STATUS":
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}

export const setStatusAppAC = (status: RequestStatusType) => {
    return {
        type: 'SET_APP_STATUS',
        status
    } as const
}

export const setInitializedAppAC = () => {
    return {
        type: 'SET_INITIALIZED_STATUS',
    } as const
}

export const initializeApp = (): AppThunkType => async dispatch => {

    try {
        let promises = [
            dispatch(setUserAuth()),
        ]
        await Promise.all(promises);
        dispatch(setInitializedAppAC());

    } catch (e) {
        console.warn(e)
    }

}