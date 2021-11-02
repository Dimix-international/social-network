import {sendMessageAC, updateNewMessageBodyAC} from "../../../../Redux/dialogs-reducer";
import {Messages} from "./Messages";
import {connect, ConnectedProps} from "react-redux";
import {RootReducerType} from "../../../../Redux/redux-store";


let mapStateToProps = ({dialogsPage, auth, app}:RootReducerType) => {
    return {
        dialogs:dialogsPage,
        isAuth: auth.isAuth,
        status: app.status
    }
}

const MessagesContainer = connect(mapStateToProps, {
    sendMessageAC,
    updateNewMessageBodyAC,
});
export type MessagesContainerPropsType = ConnectedProps<typeof MessagesContainer>;
export default MessagesContainer(Messages);