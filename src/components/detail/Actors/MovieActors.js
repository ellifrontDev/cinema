import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../../ApiKey/APIKEY";
import MovieCredits from "../MovieCredits";

const MovieActors = () => {
    const [viewMore, setViewMore] = useState(false)
    const [actorsInfo, setActorsInfo] = useState({})
    // const [movieCredits, setMovieCredits] = useState([])

    const {movieId} = useParams()
    const getInfo = async () => {
        const url = await axios(`https://api.themoviedb.org/3/person/${movieId}?api_key=${APIKEY}&language=en-US`)
        const {data} = await url
        setActorsInfo(data)
    }


    // const getMovieCredits = async () => {
    //     const url = await axios(`https://api.themoviedb.org/3/person/${movieId}/movie_credits?api_key=${APIKEY}&language=en-US`)
    //     const {data} = await url
    //     setMovieCredits(data.cast)
    // }

    useEffect(() => {
        getInfo()
        // getMovieCredits()
    }, [])

    // console.log(movieCredits)
    console.log(actorsInfo)

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
    let {profile_path, biography, name} = actorsInfo

    return (
        <div className="info-actors">
            <div className="container">
                <div className="info" style={{
                    display: 'flex',

                }}>
                    <div style={{
                        margin: '0 30px'
                    }}>{
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`}
                             alt=""/>
                    }
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <p style={{
                            paddingTop: '60px'
                        }}>Биография</p>

                        <h4>{biography ? biography.length  < 201 ? biography : (
                            <p style={{
                            display: viewMore ? 'none' : 'block'
                            }}>{biography.slice(0,200)}</p>
                         ) : ''}
                            <p onClick={()=> setViewMore(!viewMore)} style={{
                             textDecoration: 'none',
                            color: 'blue',
                            display: viewMore ? 'none' : 'block',
                            cursor: 'pointer'
                        }}>Читать далее...</p>
                        <p style={{
                            display: viewMore ? 'block' : 'none'
                        }}>{biography}</p>
                            <p onClick={()=> setViewMore(!viewMore)} style={{
                            textDecoration: 'none',
                                color: 'blue',
                                display: viewMore ?'block' : 'none',
                                cursor: 'pointer'
                            }}>читать меньше</p>
                        </h4>
                    </div>
                </div>

                {/*<Slider {...settings}>*/}
                {/*    {*/}
                {/*        movieCredits.map(el => (*/}
                {/*            <div>*/}
                {/*                <Link to={`/movie/${el.id}`}>*/}
                {/*                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}*/}
                {/*                         alt=""/>*/}
                {/*                </Link>*/}
                {/*            </div>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</Slider>*/}
            </div>
            <MovieCredits movieId={movieId}/>
        </div>
    );
};

export default MovieActors;