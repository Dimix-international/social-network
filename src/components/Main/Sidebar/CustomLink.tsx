import React from 'react';
import s from './CustomLink.module.scss'
import {Link, useMatch} from "react-router-dom";

type CustomLinkType = {
    to:string
    addclass?:string
}
export const CustomLink: React.FC<CustomLinkType> = (props) => {

    const {children, ...restProps} = props;

    //поймем является ли текущая ссылка активной
    const match = useMatch(restProps.to); //вернет null или объект

    const finalClass = () => match ? `${s.link} ${s.active} ${props.addclass}` : `${s.link} ${props.addclass}`;

    return (
        <li className={s.li}>
            <Link
                className={finalClass()}
                {...restProps}
            >
                {children}
            </Link>
        </li>
    )
}