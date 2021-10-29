import React from "react";
import s from './SuperLoading.module.scss'
import preloader from '../../assets/images/loader.gif'
export const SuperLoading = () => {

    return (
        <div className={s.loading}>
            <img
                src={preloader}
                alt="loading"/>
        </div>
    )
}