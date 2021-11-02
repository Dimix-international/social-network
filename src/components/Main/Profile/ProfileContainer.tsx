import React from "react";

import {Profile} from "./Profile";
import {RootReducerType} from "../../../Redux/redux-store";
import {connect, ConnectedProps} from "react-redux";
import {
    addPostAC,
    changeTextForNewPostAC, setUserProfile, setUserProfileAC
} from "../../../Redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {profileApi} from "../../../api/users-api";
import {setStatusAppAC} from "../../../app/app-reducer";


//типизация WithRouter
type PathParamsType = {
    userId: string //userId - тип который идет после params
}
type CommonProfileAPIComponentType = RouteComponentProps<PathParamsType>
    & ProfileUserPropsType;

class ProfileAPIComponent extends React.Component<CommonProfileAPIComponentType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId) { //если мы просто на profile без userId
            userId = '13077';
        }
        this.props.setUserProfile(userId);
    }
    render() {

        if(!this.props.isAuth) {
            return <Redirect to={'/login'} />
        }

        return (
            <Profile
                {...this.props}
            /> //передаем все пришедние props
        )
    }
}

const ProfileMapStateToProps = ({profilePage,auth, app}: RootReducerType) => {
    return {
        profile: profilePage.profile,
        status: app.status,
        isAuth: auth.isAuth
    }
}
const ProfileContainer = connect(ProfileMapStateToProps, {
    addPostAC,
    changeTextForNewPostAC,
    setUserProfile,
});

let WithUrlDataProfileAPIComponent = withRouter(ProfileAPIComponent); //вернет компоненту с данными url
// в ProfileAPIComponent  закинутся данные из url и WithUrlDataProfileAPIComponent закидываем в connect
// чтобы connect закинул данные в глубину

export type ProfileUserPropsType = ConnectedProps<typeof ProfileContainer>
// export default ProfileContainer(ProfileAPIComponent)
export default ProfileContainer(WithUrlDataProfileAPIComponent)




