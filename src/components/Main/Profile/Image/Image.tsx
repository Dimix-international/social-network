import React from "react";
import c from './Image.module.scss';

type ImageType = {
    photo: string | null
}
export const Image: React.FC<ImageType> = React.memo(({photo}) => {

        // const finallyPhoto = photo ? photo : "https://sun9-23.userapi.com/c604426/v604426369/4dbd3/UlcprL3wwZ0.jpg"

        return (
            <div className={c.image}>
                <img
                    src={"https://sun9-23.userapi.com/c604426/v604426369/4dbd3/UlcprL3wwZ0.jpg"}
                    alt="photo"/>
            </div>
        )
    }
)