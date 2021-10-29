const TOGGLE_FOLLOW_USERS = "TOGGLE_FOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export type UsersType = {
    id: string,
    name: string,
    avatar: string,
    country: string
    city: string
    status: string,
    followed: boolean,
}

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 100,
    totalUserCount: 22,
    currentPage: 3,
    isFetching: false
}
export type UsersFindPageStateType = typeof initialState

type UsersActionType =
    | ReturnType<typeof toggleFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersCount>
    | ReturnType<typeof toggleIsFetching>


export const usersReducer = (state: UsersFindPageStateType = initialState, action: UsersActionType): UsersFindPageStateType => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case "TOGGLE_FOLLOW_USER":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId
                    ? {...u, followed: !u.followed}
                    : u
                )
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_USERS_COUNT":
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const toggleFollowAC = (userId: string) => {
    return {
        type: TOGGLE_FOLLOW_USERS,
        userId,
    } as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users,
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    } as const
}

export const setUsersCount = (totalUserCount: number) => {
    return {
        type: SET_USERS_COUNT,
        totalUserCount,
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    } as const
}

