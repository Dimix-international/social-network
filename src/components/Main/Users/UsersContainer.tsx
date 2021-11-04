import {connect, ConnectedProps} from "react-redux";
import {
    followingUser,
    getUsers,
    UsersFindPageStateType,
} from "../../../Redux/users-reducer";
import {RootReducerType} from "../../../Redux/redux-store";
import React, {Component, ComponentType} from "react";
import {Users} from "./Users";
import {SuperLoading} from "../../../UniversalComponents/Loading/SuperLoading";
import {AppInitialStateType} from "../../../app/app-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersAPIComponent extends React.Component<UsersFindPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <SuperLoading/>
                        : <Users
                            {...this.props}
                            setCurrentPage={this.setCurrentPage}
                        />
                }
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

