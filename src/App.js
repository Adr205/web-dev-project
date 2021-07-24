import React, {useEffect, useState}from 'react';
import './App.css';
import Movie from "./components/Movie"
const config = require("./config");

const FEATURED_API =  config.api.Featured_Api;
const SEARCH_API =  config.api.Search_Api;

// config.db.connectionUrl


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");

  useEffect( () =>{
    getMovie(FEATURED_API)
  }, []);

  const getMovie = (API) =>{
    fetch(API)
    .then((res) => res.json())
    .then((data) =>{
      console.log(data);
      setMovies(data.results);
    })
  }


  const handleOnSubmit = (e) =>{
    e.preventDefault();

    getMovie(SEARCH_API + searchTerm);
      setSearchTerm("");
  }

  const handleOnChange = (e) =>{
    setSearchTerm(e.target.value);
  }
  return( <>
      <header>
        <a href="index.html">
          <img src="https://w7.pngwing.com/pngs/776/561/png-transparent-computer-icons-internet-domain-name-cinema-logo-television-angle-text.png"></img>
        </a>
        <form onSubmit={handleOnSubmit}>
          <input id="searchBar" type="search" placeholder="Search..." className="search" value={searchTerm} onChange = {handleOnChange}></input>
        </form>
      </header>

      <div className="movie-container">
      {movies.length > 0 &&  movies.map((movie) => (
        <Movie key={movie.id} {...movie}/>
      ))}
    </div>
</>
  )
}

export default App;
