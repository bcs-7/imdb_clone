import React, { useEffect, useState } from "react";
import "./movie.css";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [ moviedetail, setmoviedetail] = useState([]);
    const {id} = useParams();

    useEffect(() =>{
        getData();
        window.scrollTo(0,0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => setmoviedetail(data));
  }
return( <>
           <div className="image_i">
            
           <img src={`https://image.tmdb.org/t/p/original${moviedetail && moviedetail.backdrop_path}`} alt="a" width={'100%'}/>
            <div className="idk">{" "}</div>
          </div>
                <div className="overlay_i">
                    <div className="left">
                    <img src={`https://image.tmdb.org/t/p/original${moviedetail && moviedetail.poster_path}`} alt="a" width={'300px'}/> 
                    </div>
                    
                    <div className="right">
                    <div className="moviedetailname">{moviedetail? moviedetail.original_title : ""}</div><div className="totn">
                    <div className="release_i">{moviedetail? moviedetail.release_date:""}</div>
                    <div className="rating_i">{moviedetail ? Math.round(moviedetail.vote_average) : ""}<i className="fas fa-star" /></div></div>
                    <div className="genre">
                    {
                        moviedetail.genres?.map(genre =>(
                            <div className="gen" id={genre.id}>{genre.name} </div>
                        ))
                    }

                    </div>
                    
                    <div className="overview_i"><div className="sypnosis">Sypnosis</div>{moviedetail ? moviedetail.overview : " "}</div></div>
                    
                </div>
                <div className="abc">USEFUL LINKS</div>
                <div className="Links"><a href={`https://www.imdb.com/title/${moviedetail.imdb_id}`}><div className="imdb">IMDB <i className="newTab fas fa-external-link-alt" /></div></a>
                <a href={moviedetail.homepage === ""? `https://www.imdb.com/title/${moviedetail.imdb_id}`: moviedetail.homepage}><div className="official">HOMEPAGE <i className="newTab fas fa-external-link-alt" /></div></a>
                </div>
    </>
)
}
export default Movie



