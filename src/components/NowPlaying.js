import React from 'react'
import {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../ApiKey/APIKEY";

const NowPlaying = () => {
    const [now,setNow] = useState([])
    const getNow = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`)

        // axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        setNow(data.results)
    }
    useEffect( () => {
        getNow()
    },[])

    return (
        <div className="container">
          <div className="now">
              {
                  now.map(el => (
                      <div>
                          {/*<img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>*/}
                          <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster.path}`} alt=""/>
                      </div>
                  ))
              }
       </div>
        </div>
    );
};

export default NowPlaying;