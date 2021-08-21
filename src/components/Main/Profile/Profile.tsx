import React from "react";
import c from './Profile.module.scss';
import {Posts} from "./Posts/Posts";
import {Info} from "./Info/Info";
import {Image} from "./Image/Image";
import {ProfilePagePropsType} from "../../../Redux/state";

type ProfilePropsType = {
    profilePage: ProfilePagePropsType
}
export const Profile: React.FC<ProfilePropsType> = ({profilePage}) => {
    return (
        <section className={c.profile}>
            <Image/>
            <Info/>
            <Posts
                posts={profilePage.posts}
            />
        </section>
    )
}