import React, {useEffect} from "react";

import {Profile} from "./Profile";
import {RootReducerType} from "../../../Redux/redux-store";
import {connect, ConnectedProps} from "react-redux";
import {
    addPostAC,
    changeTextForNewPostAC, setStatusProfile, setUserProfile
} from "../../../Redux/profile-reducer";
//import {RouteComponentProps, withRouter} from "react-router-dom";
import {useLocation, useSearchParams} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {useParams} from "@reach/router";


//типизация WithRouter
/*
type PathParamsType = {
    userId: string //userId - тип который идет после params
}
type CommonProfileAPIComponentType = RouteComponentProps<PathParamsType>
    & ProfileUserPropsType;
*/

/*class ProfileAPIComponent extends React.Component<ProfileUserPropsType> {

    componentDidMount() {
       // let userId = this.props.match.params.userId;

        /!*if (!userId) { //если мы просто на profile без userId
            userId = '13077';
        }*!/
        this.props.setUserProfile('13077');
    }

    render() {
        return (
            <Profile
                {...this.props}
            />
        )
    }
}*/

export const ProfileAPIComponent = React.memo((props: ProfileUserPropsType) => {

    const location = useLocation();
    const str = location.pathname;
    let newStr = str.replace(/[^0-9]/g, "");

    useEffect(() => {
        if (!newStr) { //если мы просто на profile без userId
            newStr = '13077';
        }
        props.setUserProfile(newStr)
    }, [])

    return (
        <Profile
            {...props}
        />
    )
})

const ProfileMapStateToProps = ({profilePage, app}: RootReducerType) => {
    return {
        profile: profilePage,
        status: app.status,
    }
}
const ProfileContainer = connect(ProfileMapStateToProps, {
    addPostAC,
    changeTextForNewPostAC,
    setUserProfile,
    setStatusProfile
});

export type ProfileUserPropsType = ConnectedProps<typeof ProfileContainer>;

export default compose<React.ComponentType>(
    ProfileContainer,
    //withRouter,
    //withAuthRedirect,
)
(ProfileAPIComponent);
