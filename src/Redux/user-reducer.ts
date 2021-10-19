import {v1} from "uuid";


const TOGGLE_FOLLOW_USERS = "TOGGLE_FOLLOW_USER";
const SET_USERS = "SET_USERS";

export type UsersType = {
    id: string,
    name: string,
    avatar: string,
    country: string
    city: string
    status: string,
    followed: boolean
}

const initialState = {
    users: [] as Array<UsersType>,
}
export type UsersFindPageStateType = typeof initialState

type ActionType = ToggleFollowAC | SetUsersType;
export const usersReducer = (state: UsersFindPageStateType = initialState, action: ActionType): UsersFindPageStateType => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: [...state.users,...action.users]
            }
        case "TOGGLE_FOLLOW_USER":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId
                    ? {...u, followed: !u.followed}
                    : u
                )
            }
        default:
            return state
    }
}

export type ToggleFollowAC = ReturnType<typeof toggleFollowAC>;
export const toggleFollowAC = (userId: string) => {
    return {
        type: TOGGLE_FOLLOW_USERS,
        userId,
    } as const
}
export type SetUsersType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users,
    } as const
}
