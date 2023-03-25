import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {APIKEY} from "../../ApiKey/APIKEY";
import MovieCredits from "../detail/MovieCredits";

const SearchResult = () => {
    const [result, setResult] = useState([])
    const {movieName} = useParams()
    const getResults = async  (name, apikey) => {
        const  url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${name}`)
        const {data} = await  url
        setResult(data.cast)
    }

    useEffect( () => {
        getResults(movieName, APIKEY)
    })
    console.log(result)


    return (
        <div className="container">
            <div className="movie row">
                {
                    result.map(el => <MovieCredits el={el}/>)
                }
            </div>
        </div>
    );
};

export default SearchResult;