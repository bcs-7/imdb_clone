import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return <div className="header">
        <div className="header_name">
            <Link to={"/"}> <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="b" width={'80px'} /> </Link>
            <div className="Header_tots">
            <Link to={"/Movies/Popular"}><span>Popular </span></Link>
            <Link to={"/Movies/Top_rated"}><span>Top rated</span> </Link>
            <Link to={"/Movies/Upcoming"}> <span>Upcoming</span></Link></div>
       
        </div>
    </div>
        
}
export default Header;
