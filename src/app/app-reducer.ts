export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

const initialState = {
    status: 'idle' as RequestStatusType
}

export type AppInitialStateType = typeof initialState
export type AppActionType = ReturnType<typeof setStatusAppAC>

export const appReducer = (state: AppInitialStateType  = initialState , action:AppActionType):AppInitialStateType => {
    switch (action.type) {
        case "SET_APP_STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const setStatusAppAC = (status:RequestStatusType) => {
    return {
        type: 'SET_APP_STATUS',
        status
    } as const
}