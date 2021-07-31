import React from 'react';
const config = require("../config");

// const IMG_API =  config.api.Images_Api;

const setVoteClass = (vote) =>{
    if(vote >= 8){
        return "green";
    }else if(vote >= 6){
        return "orange";
    }else{
        return "red";
    }
}

const Game = ({name,background_image, overview,rating}) => 
    <div className="game">
        <img src={background_image} alt={name} ></img>
        <div className="game-info">
            <h3>{name}</h3>
            <span className={`tag ${setVoteClass(rating)}`}>{rating}</span>
        </div>
        <div className="game-over">
            <h2>Overview: </h2>
            <p>{overview}</p>
        </div>
    </div>

export default Game;