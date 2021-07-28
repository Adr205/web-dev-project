import React, { useEffect, useState } from 'react';
import '../assets/styles/Home.css';
import Movie from "../components/Movie";
const config = require("../config");

const FEATURED_API = config.api.Featured_Api;
const SEARCH_API = config.api.Search_Api;
const GFeatured_API = config.api.GamesFeaturedApi;
const GSearch_API = config.api.GamesSearchApi;
const GSearchOrder_API = config.api.GameSearchOrdering;

// config.db.connectionUrl


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");



    const getMovie = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setMovies(data.results);
            })
    }

    useEffect(() => {
        // getMovie(FEATURED_API)
        getMovie(GFeatured_API);
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        getMovie(GSearch_API + searchTerm + GSearchOrder_API);
        setSearchTerm("");
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }
    return (<>
        <header>
            <a href="index.html">
                <img src="https://w7.pngwing.com/pngs/776/561/png-transparent-computer-icons-internet-domain-name-cinema-logo-television-angle-text.png"></img>
            </a>
            <form onSubmit={handleOnSubmit}>
                <input id="searchBar" type="search" placeholder="Search..." className="search" value={searchTerm} onChange={handleOnChange}></input>
            </form>
        </header>

        <div className="movie-container">
            {movies.length > 0 && movies.map((movie) => (
                <Movie key={movie.id} {...movie} />
            ))}
        </div>
    </>
    )
}

export default Home;
