import {
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../../../Redux/dialogs-reducer";
import {Messages} from "./Messages";
import {connect, ConnectedProps} from "react-redux";
import {RootReducerType} from "../../../../Redux/redux-store";

import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";

const mapStateToProps = ({dialogsPage, app}: RootReducerType) => {
    return {
        dialogs: dialogsPage,
        status: app.status
    }
}

const MessagesContainer = connect(mapStateToProps, {
    sendMessageAC,
    updateNewMessageBodyAC,
});

export type MessagesContainerPropsType = ConnectedProps<typeof MessagesContainer>;
export default compose<ComponentType>(MessagesContainer, withAuthRedirect)(Messages);





