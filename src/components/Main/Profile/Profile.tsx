import React from "react";
import c from './Profile.module.scss';
import {Info} from "./Info/Info";
import PostsContainer from "./Posts/PostsContainer";
import {ProfileUserPropsType} from "./ProfileContainer";
import {SuperLoading} from "../../../UniversalComponents/Loading/SuperLoading";


export const Profile: React.FC<ProfileUserPropsType> = React.memo((props) => {
        const {profile, status} = props;


        return (
            <section className={c.profile}>
                {
                    status === 'loading'
                        ? <SuperLoading/>
                        : <>
                            <Info
                                info={profile.profile}
                                isChangingStatus={profile.isChangingStatus}
                                statusProfile={profile.status}
                                setStatus={props.setStatusProfile}
                            />
                            <PostsContainer/>
                        </>
                }
            </section>
        )
    }
)