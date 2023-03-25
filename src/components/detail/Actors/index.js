import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../../ApiKey/APIKEY";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

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

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,

    };

    return (
        <div className="container">
            <div className="actors" style={{
                paddingTop: '300px'
            }}>

                <Slider {...settings}>
                    {
                        actors.map(el => (
                            el.profile_path &&
                            <div style={{
                                margin: '0 5px',
                            }}>
                                <NavLink to={`/movie/movie-results/${el.id}`}>
                                    <img
                                        width={250}
                                        src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                                        alt=""/>
                                </NavLink>
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