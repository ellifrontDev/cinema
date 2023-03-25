import React, { useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import headerImg from "../img/Logo-tmdb-1.png"
import {MdSearch} from "react-icons/md"

const Header = () => {
    const [dark, setDark] = useState(false)
    const [value, setValue] = useState("")
    const  navigate = useNavigate()


    const handleClick = (name) => {
        navigate(`/movie/movie-results/${name}`)
    }

    return (
        <div id="header" style={{
            background: '#031d33',
            display: dark ? 'yellow' : 'red',
            marginBottom: '50px'
        }}>
            <div  className="container">
                <div className="header-logo">
                    <NavLink to={'/'}><img src={headerImg} width="300px" height="100px" alt=""/></NavLink>
                    <div className="header-movie"
                    style={{
                        display: 'flex',
                        alignItems: 'center',

                    }}>
                         <input onChange={(event) => setValue(event.target.value)} style={{
                            padding: '5px 10px',
                            outline: 'none',
                            borderRadius: '10px',
                            margin: '0 5px',
                            border: 'none'
                        }} type="text" placeholder="search movie..."/>
                        <button onClick={() => handleClick(value)}  style={{
                            color: 'black',
                            padding: '10px',
                            outline: 'none',
                            borderRadius: '5px',
                            border:'none',
                            cursor: 'pointer'
                        }}>{MdSearch}</button>
                    </div>
                    <button onClick={()=> setDark(!dark)} style={{
                        color: 'black',
                        padding: '10px',
                        outline: 'none',
                        borderRadius: '5px',
                        border:'none',
                        cursor: 'pointer'
                    }}>dark mode</button>

                <div className="nav">
                    <NavLink to={'/popular'}>Popular</NavLink>
                    <NavLink to={'/Now playing'}>Now playing</NavLink>
                    <NavLink to={'/Top rated'}>Top rated</NavLink>
                </div>
                </div>
            </div>

        </div>
    );
};

export default Header;