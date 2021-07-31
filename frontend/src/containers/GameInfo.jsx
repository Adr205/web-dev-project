import React, { useEffect, useState } from 'react';
import '../assets/styles/GameInfo.css';
import Info from "../components/Info";
const config = require("../config");
const UGS = config.api.UniqueGameSearch;
const KEY = config.api.API_Key;



const GameInfo = ({id}) => {
    const link = UGS + id + KEY;
    const lPhotos = UGS + id +"/screenshots" + KEY;
    //console.log(link);    
    const [info, setInfo] = useState([]);
    const [photos, setPhotos] = useState([]);
    var props = {};
    
    const getGame = (API) => {
         fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
                //console.log(data.name);
            })
    }

    const getPhotos = (API) => {
         fetch(API)
            .then((res) => res.json())
            .then((data) => {
                 setPhotos(data.results);
                // console.log(data);
            })
    }

    useEffect(  () => {
        setProps(photos,info);
          getPhotos(lPhotos);
          getGame(link);
    },[]);
    

    async function setProps(photos,info){
        props =  {
            game : info,
            image : photos
        }
        console.log(props)
    }

    // console.log(props);
    return(
        <>
        <Info {...props}/>
        </>
    )
}

export default GameInfo;