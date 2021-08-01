import React, { useEffect, useState } from 'react';
import '../assets/styles/Home.css';
import Game from "../components/Game";
const config = require('../config');


const GFeaturedAPI = config.api.GamesFeaturedApi;


// const FEATURED_API = config.api.Featured_Api;
// const SEARCH_API = config.api.Search_Api;


// config.db.connectionUrl


const Home = () => {
    const [games, setGames] = useState([]);

    const getGame = async (API) => {
        // fetch(API)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setGames(data.results);
        //     })
        const response = await fetch(API);
        const data = await response.json();
        setGames(data.results); 
    }

    useEffect(() => {
        getGame(GFeaturedAPI);
    }, []);

    
    return (
        <>
            <div className="game-container">
                {games.length > 0 && games.map((game) => (
                    <Game key={game.id} {...game} />
                ))}
            </div>
        </>
    )
}

export default Home;
