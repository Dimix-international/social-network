//selectors - функция которая принимает весь state целиком, и возвращает его часть
import {RootReducerType} from "../redux-store";

export const getUsersSelect = (state: RootReducerType) => {
    return state.findUsersPage.users
}
export const getPageSizeSelect = (state: RootReducerType) => {
    return state.findUsersPage.pageSize
}
export const getTotalUserCountSelect = (state: RootReducerType) => {
    return state.findUsersPage.totalUserCount
}
export const getCurrentPageSelect = (state: RootReducerType) => {
    return state.findUsersPage.currentPage
}
export const getIsFetchingSelect = (state: RootReducerType) => {
    return state.findUsersPage.isFetching
}
export const getFilterSelect = (state: RootReducerType) => {
    return state.findUsersPage.filter
}
export const getFollowingInProgressSelect = (state: RootReducerType) => {
    return state.findUsersPage.followingInProgress
}
