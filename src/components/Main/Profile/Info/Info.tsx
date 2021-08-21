import React from "react";
import c from './Info.module.scss';

export const Info = () => {
    return (
            <div className={c.info}>
                <div className={c.row}>
                    <div className={c.avatar}>
                        <img src="https://cdnimg.rg.ru/i/gallery/87d52c68/1_9894c58c.jpg" alt=""/>
                    </div>
                    <div className={c.body}>
                        <h3 className={c.name}>
                            Dima Melnikov
                        </h3>
                        <div className={c.content}>
                            <p>Date of Birth: 26th of June</p>
                            <p>City: Gomel</p>
                            <p>Education: BELSUT</p>
                            <p>Web Site: https://Google.by</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}