//selectors - функция которая принимает весь state целиком, и возвращает его часть
import {RootReducerType} from "../Redux/redux-store";

export const getStatusSelect = (state: RootReducerType) => {
    return state.app.status
}
export const getIsInitializedSelect = (state: RootReducerType) => {
    return state.app.isInitialized
}
