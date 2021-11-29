/*
import {Dispatch} from "redux";


export const handleServerAppError = <T>(data: TodolistResponseType<T> | string,
                                        dispatch: Dispatch) => {
    if(typeof data === 'string') {
        dispatch(setAppErrorAC({error:data}));
        dispatch(setAppStatusAC({status:'failed'}));
    } else{
        if (data.messages.length ) {
            dispatch(setAppErrorAC({error:data.messages[0]}));
            dispatch(setAppStatusAC({status:'failed'}));
        } else {
            dispatch(setAppErrorAC({error:'some error occurred'}));
            dispatch(setAppStatusAC({status:'failed'}));
        }
    }
}
export const handleServerNetworkError = (error: { message: string },
                                         dispatch: Dispatch) => {
    dispatch(setAppErrorAC({error: error.message ? error.message : 'some error occurred'}));
    dispatch(setAppStatusAC({status:'failed'}));
}*/
