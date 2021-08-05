import React from "react";
import c from './Profile.module.scss';
import {Posts} from "./Posts/Posts";
import {Info} from "./Info/Info";
import {Image} from "./Image/Image";

export const Profile = () => {
    return (
        <section className={c.profile}>
            <Image/>
            <Info/>
            <Posts/>
        </section>
    )
}