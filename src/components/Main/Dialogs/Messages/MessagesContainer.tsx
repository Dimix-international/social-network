import React from "react";
import {DialogPagePropsType, sendMessageAC, updateNewMessageBodyAC} from "../../../../Redux/dialogs-reducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {Dispatch, Store} from "redux";
import {RootReducerType} from "../../../../Redux/redux-store";
/*import {StoreContext} from "../../../../StoreContext";*/


/*export const MessagesContainer = () => {
    /!*let state = props.store.getState().dialogsPage
    const onAddMessage = () => {
        props.store.dispatch(sendMessageAC());
    }
    const onChangeTextForNewMessage = (message: string) => {
        props.store.dispatch(updateNewMessageBodyAC(message))
    }*!/
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage
                    const onAddMessage = () => {
                        store.dispatch(sendMessageAC());
                    }
                    const onChangeTextForNewMessage = (message: string) => {
                        store.dispatch(updateNewMessageBodyAC(message))
                    }
                    return (
                        <Messages
                            dialogs={state}
                            addMessage={onAddMessage}
                            changeTextForNewMessage={onChangeTextForNewMessage}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}*/

//типизация возвращаемого значения mapStateToProps
type MapStatePropsType = {
    dialogs:DialogPagePropsType
}
let mapStateToProps = (state:RootReducerType):MapStatePropsType => {
    return {
        dialogs:state.dialogsPage
    }
}
type MapDispatchPropsType = {
    addMessage:() => void
    changeTextForNewMessage:(message:string) => void
}
//типизация props для Messages
export type MessagesPropsType = MapStatePropsType & MapDispatchPropsType;
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        addMessage:() => {
            dispatch(sendMessageAC());
        },
        changeTextForNewMessage:(message:string) => {
            dispatch(updateNewMessageBodyAC(message))
        },

    }
}
export const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)