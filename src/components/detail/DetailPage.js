import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
import "./detail.scss";
import Trailers from "./Trailer/Trailers";
import Actors from "./Actors";

const DetailPage = () => {

    const movieId = useParams()

    const [detail, setDetail] = useState({})
    const getDetail = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${APIKEY}&language=en-US`)
        const {data} = await response
        await setDetail(data)
    }

    console.log(detail)


    useEffect(() => {
        getDetail()
    }, [])

    const {backdrop_path, poster_path, title, overview, genres, runtime, release_date, vote_average} = detail

    return (
        <section id="detail" style={{
            background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) no-repeat left/cover`,
            maxHeight: '100vh',
            filter: "grayscale(0%)"
        }}>
            <div className="container">
                <div className="detail">
                    {
                        <div className="detail--block">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt=""/>
                            <div className="detail--block__info">
                                <h1>{title}</h1>
                                <div className="detail--block__info--titles">
                                    <p>{release_date}</p>
                                    {
                                        genres ? genres.map(el => (<div>{el.name}</div>)) : ''
                                    }
                                    <p>{Math.floor(runtime / 60)}h {runtime % 60}m</p>
                                </div>

                                <div className="detail--block__info--titles__btn">
                                    <button className='vote'>{vote_average * 10}%</button>
                                    <h4>Рейтинг</h4>
                                </div>
                                <p>{overview}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Actors movieId={movieId}/>
            <Trailers movieId={movieId}/>
        </section>
    );
};

export default DetailPage;