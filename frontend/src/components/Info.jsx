import React from 'react';


const Info = ({ name, background_image, description_raw, released }) => {

    return (
        <div className="game-info-container">
            <div className="game-left">
                <h1>{name}</h1>
                <img src={background_image} alt={name} />
            </div>
            <div className="game-center">
                <p className="description">{description_raw}</p>
                <p className="date">Released Date: {released}</p>
            </div>
            <div className="game-photos-ingame">
            {/* <img src={image[0].image} alt="" />
            <img src={image[1].image} alt="" /> */}
            </div>
        </div>
    )
}

export default Info;