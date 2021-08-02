import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({apis}) => {
    // const [searchTerm, setSearchTerm] = useState("");
    // const [games, setGames] = useState([]);

    // const handleOnSubmit = (e) => {
    //     e.preventDefault();

    //     getGame(apis.GSearch_API + searchTerm + apis.GSearchOrder_API);
    //     setSearchTerm("");
    // }

    // const handleOnChange = (e) => {
    //     setSearchTerm(e.target.value);
    // }


    // const getGame = (API) => {
    //     fetch(API)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data.results);
    //             setGames(data.results);
    //         })
    // }

    // useEffect(() => {
    //     getGame(api);
    // }, []);

    return (
        <header>
            <Link to="/">
                <h1>GameRank</h1>
            </Link>
            <form>
                {/* <input id="searchBar" type="search" placeholder="Search..." className="search" value={searchTerm} onChange={handleOnChange}/> */}
                {/* <input/> */}
            </form>
            {/* <form onSubmit={handleOnSubmit}>
                <input id="searchBar" type="search" placeholder="Search..." className="search" value={searchTerm} onChange={handleOnChange}/>
                <input id="searchBar" type="search" placeholder="Search..." className="search" value={searchTerm} onChange={handleOnChange}/>
            </form> */}
        </header>
    )
};

export default Header;