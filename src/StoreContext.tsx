import React, {createContext} from "react";
import {Store} from "redux";
import {RootReducerType} from "./Redux/redux-store";


export const StoreContext = createContext({} as Store<RootReducerType, any>);

export type ProviderType = {
    store: Store<RootReducerType, any>,
    children: React.ReactNode
}
export const Provider = (props:ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}