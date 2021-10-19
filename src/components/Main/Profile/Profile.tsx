import React from "react";
import c from './Profile.module.scss';
import {Info} from "./Info/Info";
import {Image} from "./Image/Image";
import {PostsContainer} from "./Posts/PostsContainer";


export const Profile = () => {
    return (
        <section className={c.profile}>
            <Image/>
            <Info/>
            <PostsContainer/>
        </section>
    )
}