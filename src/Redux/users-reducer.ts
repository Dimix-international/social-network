import {AppThunkType} from "./redux-store";
import {followApi, usersApi} from "../api/users-api";
import {transformResponseUsers} from "../helper/transformUsers";
import {setStatusAppAC} from "../app/app-reducer";

const TOGGLE_FOLLOW_USERS = "TOGGLE_FOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

export type UsersType = {
    id: string,
    name: string,
    avatar: string,
    country: string
    city: string
    status: string,
    followed: boolean,
}

export type FilterSearchUsersType = {
    term:string,
    friend: null | boolean
}
const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 20,
    totalUserCount: 22,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<string>,
    filter: {
        term: '',
        friend: null
    } as FilterSearchUsersType
}
export type UsersFindPageStateType = typeof initialState

export type UsersActionType =
    | ReturnType<typeof toggleFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleFollowingInProgressAC>
    | SetFilterSearchUsersType


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
        case "FOLLOWING_IN_PROGRESS": {
            return {
                ...state,
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.id] //если id нету - добавляем в массив - подписка
                        : state.followingInProgress.filter(el => el === action.id) //удаляем если есть id - отписка
            }
        }
        case "SET_FILTER_SEARCH_USERS": {
            return {...state, filter: action.filter}
        }
        default:
            return state
    }
}
export const toggleFollowingInProgressAC = (id: string, isFetching: boolean) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        id,
        isFetching,
    } as const
}


export const toggleFollowAC = (userId: string) => {
    return {
        type: TOGGLE_FOLLOW_USERS,
        userId,
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    } as const
}

export const setUsersCountAC = (totalUserCount: number) => {
    return {
        type: SET_USERS_COUNT,
        totalUserCount,
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    } as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users,
    } as const
}

type SetFilterSearchUsersType = {
    type: 'SET_FILTER_SEARCH_USERS',
    filter: FilterSearchUsersType
}
export const setFilterSearchUsersAC = (filter:FilterSearchUsersType):SetFilterSearchUsersType => {
    return {
        type:"SET_FILTER_SEARCH_USERS",
        filter,
    }
}

export const getUsers = (currentPage: number, pageSize: number, filter:FilterSearchUsersType): AppThunkType => async dispatch => {

    dispatch(toggleIsFetchingAC(true));

    try {
        const response = await usersApi.getUsers(currentPage, pageSize,filter.term, filter.friend);
        dispatch(setUsersCountAC(response.totalCount));
        const transformData = transformResponseUsers(response.items);
        dispatch(setUsersAC(transformData));
        dispatch(setCurrentPageAC(currentPage));
        dispatch(setFilterSearchUsersAC(filter));
        dispatch(toggleIsFetchingAC(false));
    } catch (e) {
        dispatch(toggleIsFetchingAC(false));
        console.warn(e)
    }

}

export const followingUser = (id:string, isFetching:boolean,): AppThunkType => async dispatch => {

    dispatch(setStatusAppAC('loading'));

    try {
        let response;

        if(!isFetching) {
            response = await followApi.deleteFollow(id);//удаляем из друзей
        } else{
            response = await followApi.postFollow(id);//добавляем в друзья
        }

        if(response.data.resultCode === 0) {
            dispatch(toggleFollowingInProgressAC(id,isFetching));//чтобы disable только одна кнопка
            dispatch(toggleFollowAC(id)); //добавляем/удаляем из друзей
            dispatch(setStatusAppAC('succeeded'));
        }
    } catch (e) {
        console.warn(e);
        dispatch(setStatusAppAC('failed'));
    }
}
