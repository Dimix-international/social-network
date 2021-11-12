import React, {useState} from "react";
import c from './Info.module.scss';
import defaultImage from '../../../../assets/images/anonimus.jpg'
import {GetProfileResponseType} from "../../../../api/users-api";
import {EditableSpan} from "../../../../UniversalComponents/EditableSpan/EditableSpan";
import {RequestStatusType} from "../../../../app/app-reducer";

type InfoPropsType = {
    info: GetProfileResponseType
    isChangingStatus:  RequestStatusType
    statusProfile:string
    setStatus:(text:string) => void
}

export const Info: React.FC<InfoPropsType> = React.memo((props) => {
        const {info,isChangingStatus, statusProfile, setStatus} = props;

        const linkContacts = (link: string | null) => link ? link : undefined;

        const finallyAvatar = info.photos.small ? info.photos.small : defaultImage;

        return (
            <div  className={c.info}>
                <div className={c.row}>
                    <div className={c.avatar}>
                        <img
                            src={finallyAvatar}
                            alt="avatar"/>
                    </div>
                    <div className={c.body}>
                        <div className={c.top}>
                            <h3 className={c.name}>
                                {info.fullName}
                            </h3>
                            <div className={c.status}>
                                <EditableSpan
                                    statusText={statusProfile}
                                    statusLoading={isChangingStatus}
                                    callback={setStatus}
                                />
                            </div>
                        </div>
                        <div className={c.content}>
                            <p>About
                                me: {info.aboutMe ? info.aboutMe : 'Расскажу потом'}</p>
                            <p>Looking for a job:
                                {
                                    info.lookingForAJob
                                        ? <span
                                            className={c.looking__true}>&#10003;</span>
                                        :
                                        <span className={c.looking__false}>x</span>
                                }
                            </p>
                            <p>
                                <a href={linkContacts(info.contacts.website)}>
                                    {info.contacts.website ? `${info.contacts.website}` : 'Web Site: https://Google.by'}
                                </a>
                            </p>
                            <div className={c.contacts}>
                                <h3>Contacts:</h3>
                                <div className={c.links}>
                                    <a href={linkContacts(info.contacts.facebook)}>facebook</a>
                                    <a href={linkContacts(info.contacts.vk)}>vk</a>
                                    <a href={linkContacts(info.contacts.twitter)}>twitter</a>
                                    <a href={linkContacts(info.contacts.instagram)}>instagram</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)