import {connect, ConnectedProps} from "react-redux";
import {
    FilterSearchUsersType,
    followingUser,
    getUsers,
    UsersFindPageStateType,
} from "../../../Redux/users-reducer";
import {RootReducerType} from "../../../Redux/redux-store";
import React from "react";
import {Users} from "./Users";

import {AppInitialStateType} from "../../../app/app-reducer";




class UsersAPIComponent extends React.Component<UsersFindPropsType> {
    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props;
        this.props.getUsers(currentPage, pageSize, filter)
    }

    setCurrentPage = (pageNumber: number) => {
        const {pageSize, filter} = this.props;
        this.props.getUsers(pageNumber, pageSize, filter);
    }

    onFilterChanged = (filter: FilterSearchUsersType) => {

        const {pageSize} = this.props;
        this.props.getUsers(1, pageSize, filter);
    }

    render() {
        return (
            <>
                <Users
                    {...this.props}
                    onFilterChanged={this.onFilterChanged}
                    setCurrentPage={this.setCurrentPage}
                />
            </>
        )
    }
}


const MapStateToProps = (
    {
        findUsersPage: {
            users,
            pageSize,
            totalUserCount,
            currentPage,
            isFetching,
            filter,
            followingInProgress
        }, app: {status}
    }: RootReducerType)
    : UsersFindPageStateType & AppInitialStateType => {
    return {
        users,
        pageSize,
        totalUserCount,
        currentPage,
        isFetching,
        status,
        filter,
        followingInProgress
    }
}


const UsersContainer = connect(MapStateToProps, {
    getUsers,
    followingUser,
});


export type UsersFindPropsType = ConnectedProps<typeof UsersContainer>
export default UsersContainer(UsersAPIComponent)

//защита через запись compose
//export default compose<ComponentType>(UsersContainer,withAuthRedirect )(UsersAPIComponent)

