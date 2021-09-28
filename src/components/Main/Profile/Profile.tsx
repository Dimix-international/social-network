import React from "react";
import c from './Profile.module.scss';
import {Info} from "./Info/Info";
import {Image} from "./Image/Image";
import {ActionType, ProfilePagePropsType} from "../../../Redux/store";
import {PostsContainer} from "./Posts/PostsContainer";
import {Store} from "redux";
import {RootReducerType} from "../../../Redux/redux-store";


export const Profile = () => {
    return (
        <section className={c.profile}>
            <Image/>
            <Info/>
            <PostsContainer/>
        </section>
    )
}