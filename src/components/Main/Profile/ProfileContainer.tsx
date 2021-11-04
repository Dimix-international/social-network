import React from "react";

import {Profile} from "./Profile";
import {RootReducerType} from "../../../Redux/redux-store";
import {connect, ConnectedProps} from "react-redux";
import {
    addPostAC,
    changeTextForNewPostAC, setUserProfile
} from "../../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


//типизация WithRouter
type PathParamsType = {
    userId: string //userId - тип который идет после params
}
type CommonProfileAPIComponentType = RouteComponentProps<PathParamsType>
    & ProfileUserPropsType;

class ProfileAPIComponent extends React.Component<CommonProfileAPIComponentType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) { //если мы просто на profile без userId
            userId = '13077';
        }
        this.props.setUserProfile(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
            />
        )
    }
}

const ProfileMapStateToProps = ({profilePage, app}: RootReducerType) => {
    return {
        profile: profilePage.profile,
        status: app.status,
    }
}
const ProfileContainer = connect(ProfileMapStateToProps, {
    addPostAC,
    changeTextForNewPostAC,
    setUserProfile,
});

export type ProfileUserPropsType = ConnectedProps<typeof ProfileContainer>;

export default compose<React.ComponentType>(
    ProfileContainer,
    withRouter,
    withAuthRedirect,
)
(ProfileAPIComponent);
