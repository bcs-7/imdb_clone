import React, {useEffect, useState} from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";
import "./card.css"

const Card = ({movie}) => {
    const [ isloading, setisloading] = useState([true])

    useEffect(() =>{
        setTimeout(() => {
            setisloading(false);
        }, 1500);
    },[])
    return <>{
        isloading? <div className="card"> 
        <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={450} duration={2} width={300}/>
        </SkeletonTheme></div>
        :
    <div className="card">
        <Link to={`/movie/${movie.id}`}>
        <div className="img">
            <img src={`https://image.tmdb.org/t/p/original${movie? movie.poster_path:""}`} alt="a" width={'100%'}/>
          </div>
                <div className="overlay_card">
                    <div className="movie">{movie? movie.original_title : ""}</div><div className="totn_card">
                    <div className="release1">{movie? movie.release_date:""}</div>
                    <div className="rating1">{movie ? Math.round(movie.vote_average) : ""}<i className="fas fa-star" /></div></div>
                    <div className="overview1">{movie.overview.length > 100? movie.overview.slice(0,98) + "...":movie.overview}</div>
                    
                </div>


        </Link>
    </div>
}</>
}
export default Card;