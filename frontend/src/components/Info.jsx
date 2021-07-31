import React from 'react';


const Info = ({game,image}) => {
    
    return (
        <div className="game-info-container">
            <h1>{game.name}</h1>
            <img src={game.background_image} alt={game.name} />
            <p>{game.released}</p>
            {game.description}
            
        </div>
    )
}

export default Info;