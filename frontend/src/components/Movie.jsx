import React from 'react';
const config = require("../config");

const IMG_API =  config.api.Images_Api;

const setVoteClass = (vote) =>{
    if(vote >= 8){
        return "green";
    }else if(vote >= 6){
        return "orange";
    }else{
        return "red";
    }
}

const Movie = ({name,background_image, overview,rating}) => 
    <div className="movie">
        <img src={background_image} alt={name} ></img>
        <div className="movie-info">
            <h3>{name}</h3>
            <span className={`tag ${setVoteClass(rating)}`}>{rating}</span>
        </div>
        <div className="movie-over">
            <h2>Overview: </h2>
            <p>{overview}</p>
        </div>
    </div>

export default Movie;