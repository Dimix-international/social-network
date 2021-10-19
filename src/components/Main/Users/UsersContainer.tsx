import {connect, ConnectedProps} from "react-redux";
import {
    setUsersAC,
    toggleFollowAC, UsersFindPageStateType,
} from "../../../Redux/user-reducer";
import {RootReducerType} from "../../../Redux/redux-store";
import Users from "./Users";



const MapStateToProps = ({findUsersPage}: RootReducerType)
    : UsersFindPageStateType => {
    return {
        users: findUsersPage.users
    }
}
const UsersContainer = connect(MapStateToProps, {
    toggleFollowAC,
    setUsersAC,
});
export type UsersFindPropsType = ConnectedProps<typeof UsersContainer>
//export default UsersContainer(UsersFunComp)
export default UsersContainer(Users)


