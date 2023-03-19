import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../../ApiKey/APIKEY";
import Slider from "react-slick";

const Trailers = ({movieId}) => {

    const [trailers, setTrailers] = useState([])

    const getTrailers = async (key,id) => {
    const  response = await axios(`https://api.themoviedb.org/3/movie/${movieId.id}/videos?api_key=${key}&language=en-US`)
        const {data} = await response
     await setTrailers(data.results)
    }


    useEffect(() => {
        getTrailers(APIKEY, movieId)
    },[])
    console.log(trailers)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div>

            <div className='container'>
                {/*<Slider {...settings}>*/}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        width: '990px',
                        overflow: 'hidden',
                        padding: '100px 0'
                    }}>
                        {
                            trailers.map(el => (
                                <iframe style={{
                                    margin: '0 15px'
                                }} width="400" height="180" src={`https://www.youtube.com/embed/${el.id}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            ))
                        }
                    </div>
                {/*</Slider>*/}
            </div>
        </div>
    );
};

export default Trailers;