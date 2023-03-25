import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../../ApiKey/APIKEY";
import Slider from "react-slick";
import {Link} from "react-router-dom";

const MovieCredits = ({movieId}) => {
    const [movieCredits, setMovieCredits] = useState([])

    const getMovieCredits = async () => {
        const url = await axios(`https://api.themoviedb.org/3/person/${movieId}/movie_credits?api_key=${APIKEY}&language=en-US`)
        const {data} = await url
        setMovieCredits(data.cast)
    }

    useEffect(()=>{
        getMovieCredits()
    })
    console.log(movieCredits)

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container">

            <Slider {...settings}>
                {
                    movieCredits.map(el => (
                        <div>
                            <Link to={`/movie/${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                     alt=""/>
                            </Link>
                            <h4 style={{
                                color: 'black',
                                textAlign: 'center',
                                width: '150px'
                            }}>{el.title}</h4>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default MovieCredits;