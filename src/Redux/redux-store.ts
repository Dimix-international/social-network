import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

//типизация всего state - что возвращает rootReducer
export type RootReducerType = ReturnType<typeof rootReducer>

export let store: Store<RootReducerType, any> = createStore(rootReducer);

// @ts-ignore
window.store = store