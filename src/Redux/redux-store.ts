import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {ProfileActionType, profileReducer} from "./profile-reducer";
import {DialogsActionType, dialogsReducer} from "./dialogs-reducer";
import {UsersActionType, usersReducer} from "./users-reducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import {AppActionType, appReducer} from "../app/app-reducer";
import thunk, {ThunkAction} from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUsersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

//типизация всего state - что возвращает rootReducer
export type RootReducerType = ReturnType<typeof rootReducer>

export let store: Store<RootReducerType, AppActionsType> = createStore(rootReducer, applyMiddleware(thunk));


export type AppActionsType =
    | ProfileActionType
    | DialogsActionType
    | UsersActionType
    | AuthActionType
    | AppActionType;


export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootReducerType, unknown, AppActionsType>

// @ts-ignore
window.store = store