import React from 'react';
import {NavLink} from "react-router-dom";
import headerImg from "../img/unnamed.png"


const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header-logo">
                    <NavLink to={'/'}><img src={headerImg} width="300px" height="150px" alt=""/></NavLink>


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