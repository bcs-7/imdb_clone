import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Movielist from "../movielist/movielist";

const Home = () => {
   const [ popularMovies , setpopularMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setpopularMovies(data.results))
    }, []); 

    return   <> 
       <div className="poster">
        <Carousel autoFocus={true} showThumbs={false} autoPlay={true} infiniteLoop={true} transitionTime={3} showStatus={false}>
            {
                popularMovies.map(movie => (<> <Link to={`/movie/${movie.id}`}> 
                    <div className="image">
            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="a" width={'100%'}/>
            <div className="idk">{" "}</div>
          </div>
                <div className="overlay">
                    <div className="moviename">{movie? movie.original_title : ""}</div><div className="totn">
                    <div className="release">{movie? movie.release_date:""}</div>
                    <div className="rating">{movie ? Math.round(movie.vote_average) : ""}<i className="fas fa-star" /></div></div>
                    <div className="overview">{movie.overview.length > 300? movie.overview.slice(0,298) + "...":movie.overview}</div>
                    
                </div>
                </Link>
                </>
                ))
                
            }
        </Carousel> 
        <Movielist />
        </div></>
}

export default Home;

