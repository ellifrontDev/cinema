import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../../ApiKey/APIKEY";
import Slider from "react-slick";

const Actors = ({movieId}) => {

    const [actors, setActors] = useState([])

    const getActors = async (key, id) => {
        const response = await axios(`https://api.themoviedb.org/3/movie/${movieId.id}/credits?api_key=${key}&language=en-US`)
        const {data} = await response
        setActors(data.cast)
    }
    console.log(actors)
    useEffect(() => {
        getActors(APIKEY, movieId)
    })

    var settings = {
        dots: false,
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
            <div className="actors" style={{
                padding: '25rem 0'
            }}>

                <Slider {...settings}>
                    {
                        actors.map(el => (
                            el.profile_path &&

                            <div style={{
                                margin: '0 5px',
                            }}>
                                <img
                                    width={250}
                                    src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                                    alt=""/>
                                <h4 style={{
                                    width: '250px',
                                    textAlign: 'center',
                                    margin: '5px 0'
                                }}>{el.name}</h4>
                                <p style={{
                                    width: '250px',
                                    textAlign: 'center',
                                }}
                                >{el.character}</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Actors;
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US