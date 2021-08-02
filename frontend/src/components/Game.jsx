import React from 'react';
import { Link } from 'react-router-dom';
// const config = require("../config");

// const IMG_API =  config.api.Images_Api;

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
}

const Game = ({ id, name, background_image, overview, rating}) => {
    // let gameURL = name.split(' ').join('-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
    // gameURL = `game/${gameURL}`;
    let gameURL = `game/${id}`;
    return (
        <Link to={gameURL} >
            <div className="game">
                <img src={background_image} alt={name} ></img>
                <div className="game-info">
                    <h3>{name}</h3>
                    <span className={`tag ${setVoteClass(rating)}`}>{rating}</span>
                </div>
            </div>
        </Link>
    )
}

export default Game;