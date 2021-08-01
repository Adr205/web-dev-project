import React from 'react';


const Info = ({ game, image }) => {

    return (
        <div className="game-info-container">
            <div className="game-left">
                <h1>{game.name}</h1>
                <img src={game.background_image} alt={game.name} />
            </div>
            <div className="game-center">
                <p className="description">{game.description}</p>
                <p className="date">Released Date: {game.released}</p>
            </div>
            <div className="game-photos-ingame">
            <img src={image[0].image} alt="" />
            <img src={image[1].image} alt="" />
            </div>

        </div>
    )
}

export default Info;