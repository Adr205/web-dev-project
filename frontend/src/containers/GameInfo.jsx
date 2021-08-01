import React, { useEffect, useState } from 'react';
import '../assets/styles/GameInfo.css';
import Info from "../components/Info";
import Comment from "../components/Comment";
import NewComment from "../components/NewComment";
const config = require("../config");
// const UGS = config.api.UniqueGameSearch;
// const KEY = config.api.API_Key;
const API_URL = config.api.API_URL;
const API_KEY = config.api.API_KEY;



const GameInfo = ({ id }) => {
    const API = `${API_URL}/${id}${API_KEY}`;
    const [gameInfo, setGameInfo] = useState(null);
    // const link = UGS + id + KEY;
    // const lPhotos = UGS + id +"/screenshots" + KEY;
    //console.log(link);    
    // const [photos, setPhotos] = useState([]);
    // var props = {};

    const getGame = async (API) => {
        // fetch(API)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setInfo(data);
        //         //console.log(data.name);
        //     })
        const response = await fetch(API);
        const gameInfo = await response.json();
        setGameInfo(gameInfo)
        // console.log(gameInfo)
    }

    // const getPhotos = (API) => {
    //      fetch(API)
    //         .then((res) => res.json())
    //         .then((data) => {
    //              setPhotos(data.results);
    //             // console.log(data);
    //         })
    // }

    useEffect(() => {
        // getPhotos(lPhotos);
        getGame(API);
    }, []);

    // setProps(photos, info);


    // function setProps(photos, info) {
    //     props = {
    //         game: info,
    //         image: photos
    //     }
    //     console.log(props)
    // }

    // console.log(props);
    return (
        <>
            {/* <Info {...props} /> */}
            {/* {console.log(gameInfo)} */}
            <Info {...gameInfo} />
            <h2 className="reviews-title">Users Reviews</h2>
            <NewComment/>
            <div className="reviews-container">
                <Comment/>
            </div>

        </>
    )
}

export default GameInfo;