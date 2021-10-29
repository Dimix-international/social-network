import {connect, ConnectedProps} from "react-redux";
import {
    setCurrentPage,
    setUsersAC, setUsersCount,
    toggleFollowAC, toggleIsFetching, UsersFindPageStateType,
} from "../../../Redux/users-reducer";
import {RootReducerType} from "../../../Redux/redux-store";
import userDefaultImage from "../../../assets/images/smile.png";
import axios from "axios";
import React from "react";
import {Users} from "./Users";
import {SuperLoading} from "../../../UniversalComponents/Loading/SuperLoading";


type ResponseUserType = {
    name: string,
    id: number,
    uniqueUrlName: string
    photos: { small: string, large: string }
    status: string
    followed: boolean
}
type GetResponseType = {
    error: null | string
    items: Array<ResponseUserType>,
    totalCount: number
}

export type FormatUserType = {
    id: string,
    name: string,
    avatar: string
    country: string
    city: string
    status: string
    followed: boolean
}
const transformResponseUsers = (data: Array<ResponseUserType>) => {
    return data.map(u => {
        return {
            id: String(u.id),
            name: u.name,
            avatar: u.photos.small ? u.photos.small : userDefaultImage,
            country: 'Russia',
            city: 'North Barvicha',
            status: u.status ? u.status : 'Ой, напишу в другой раз)',
            followed: u.followed,
        }
    })
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

class UsersAPIComponent extends React.Component<UsersFindPropsType> {
    componentDidMount() {

        this.props.toggleIsFetching(true);

        instance.get<GetResponseType>(
            `/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
            .then(response => {
                this.props.setUsersCount(response.data.totalCount);

                return transformResponseUsers(response.data.items)
            })
            .then(data => {
                this.props.setUsersAC(data);
                this.props.toggleIsFetching(false);
            })
    }

    showMoreUsers = () => {
        this.props.toggleIsFetching(true);

        if (this.props.users.length === 0) {
            axios.get<GetResponseType>('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    return transformResponseUsers(response.data.items)
                })
                .then(data => {
                    this.props.setUsersAC(data);
                    this.props.toggleIsFetching(false);
                })
        }
    }
    setCurrentPage = (pageNumber: number) => {

        this.props.toggleIsFetching(true);

        instance.get<GetResponseType>(
            `/users?page=${pageNumber}&count=${this.props.pageSize}`
        )
            .then(response => {
                return transformResponseUsers(response.data.items)
            })
            .then(data => {
                this.props.setUsersAC(data)
            })
            .then(() => {
                this.props.setCurrentPage(pageNumber);
                this.props.toggleIsFetching(false);
            })
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <SuperLoading />
                        : <Users
                            users={this.props.users}
                            totalUserCount={this.props.totalUserCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            setCurrentPage={this.setCurrentPage}
                            toggleFollowAC={this.props.toggleFollowAC}
                            showMoreUsers={this.showMoreUsers}
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
            isFetching
        }
    }: RootReducerType)
    : UsersFindPageStateType => {
    return {
        users,
        pageSize,
        totalUserCount,
        currentPage,
        isFetching,
    }
}
const UsersContainer = connect(MapStateToProps, {
    toggleFollowAC,
    setUsersAC,
    setCurrentPage,
    setUsersCount,
    toggleIsFetching,

});
export type UsersFindPropsType = ConnectedProps<typeof UsersContainer>
//export default UsersContainer(UsersFunComp)
export default UsersContainer(UsersAPIComponent)


