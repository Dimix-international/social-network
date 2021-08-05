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
                        <div className={c.name}>
                            Dima Melnikov
                        </div>
                        <div className={c.content}>
                            <div>Date of Birth: 26th of June</div>
                            <div>City: Gomel</div>
                            <div>Education: BELSUT</div>
                            <div>Web Site: https://Google.by</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}