import {connect, ConnectedProps} from "react-redux";
import {
    FilterSearchUsersType,
    followingUser,
    requestUsers,
    UsersFindPageStateType,
} from "../../../Redux/users-reducer";
import {RootReducerType} from "../../../Redux/redux-store";
import React, {useCallback, useEffect, useState} from "react";
import {Users} from "./Users";

import {AppInitialStateType} from "../../../app/app-reducer";
import {
    getCurrentPageSelect,
    getFilterSelect,
    getFollowingInProgressSelect,
    getIsFetchingSelect,
    getPageSizeSelect,
    getTotalUserCountSelect,
    getUsersSelect
} from "../../../Redux/selectors/users-selectors";
import {
    getIsInitializedSelect,
    getStatusSelect
} from "../../../app/app-selectors";
import {useSearchParams} from "react-router-dom";
import {useParams} from "@reach/router";


/*class UsersAPIComponent extends React.Component<UsersFindPropsType> {
    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props;
        this.props.requestUsers(currentPage, pageSize, filter)
    }

    setCurrentPage = (pageNumber: number) => {
        const {pageSize, filter} = this.props;
        this.props.requestUsers(pageNumber, pageSize, filter);
    }

    onFilterChanged = (filter: FilterSearchUsersType) => {

        const {pageSize} = this.props;
        this.props.requestUsers(1, pageSize, filter);
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
}*/
export const UsersAPIComponent = React.memo((props: UsersFindPropsType) => {

    const {currentPage, pageSize, filter, requestUsers} = props;
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {

        requestUsers(currentPage, pageSize, filter)
        setSearchParams({
            ...Object.fromEntries(searchParams),
            page: String(currentPage)
        })

    }, [])


    const setCurrentPage = useCallback( (pageNumber: number) => {
        requestUsers(pageNumber, pageSize, filter);
        setSearchParams({
            ...Object.fromEntries(searchParams),
            page: String(pageNumber)
        })
    },[filter, pageSize, requestUsers, searchParams,  setSearchParams])

    const onFilterChanged = useCallback( (filter: FilterSearchUsersType) => {
        requestUsers(1, pageSize, filter);
    },[ pageSize , requestUsers])

    return (
        <>
            <Users
                {...props}
                onFilterChanged={onFilterChanged}
                setCurrentPage={setCurrentPage}
            />
        </>
    )
})


const MapStateToProps_ = (
    {
        findUsersPage: {
            users,
            pageSize,
            totalUserCount,
            currentPage,
            isFetching,
            filter,
            followingInProgress
        }, app: {status, isInitialized}
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
        isInitialized,
        followingInProgress
    }
}
//используем select
const MapStateToProps = (state: RootReducerType) => {
    return {
        users: getUsersSelect(state),
        pageSize: getPageSizeSelect(state),
        totalUserCount: getTotalUserCountSelect(state),
        currentPage: getCurrentPageSelect(state),
        isFetching: (getIsFetchingSelect(state)),
        filter: getFilterSelect(state),
        followingInProgress: getFollowingInProgressSelect(state),
        status: getStatusSelect(state),
        isInitialized: getIsInitializedSelect(state),
    }
}

const UsersContainer = connect(MapStateToProps, {
    requestUsers,
    followingUser,
});


export type UsersFindPropsType = ConnectedProps<typeof UsersContainer>
export default UsersContainer(UsersAPIComponent)

//защита через запись compose
//export default compose<ComponentType>(UsersContainer,withAuthRedirect )(UsersAPIComponent)

