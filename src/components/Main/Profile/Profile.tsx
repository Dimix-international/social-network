import React from "react";
import c from './Profile.module.scss';
import {Posts} from "./Posts/Posts";
import {Info} from "./Info/Info";
import {Image} from "./Image/Image";
import {ActionType, ProfilePagePropsType} from "../../../Redux/state";

type ProfilePropsType = {
    profilePage: ProfilePagePropsType
    dispatch:(action:ActionType) => void
}
export const Profile: React.FC<ProfilePropsType> = (
    {
        profilePage,
        dispatch
    }) => {
    return (
        <section className={c.profile}>
            <Image/>
            <Info/>
            <Posts
                posts={profilePage.posts}
                newPost = {profilePage.textForNewPost}
                dispatch={dispatch}
            />
        </section>
    )
}