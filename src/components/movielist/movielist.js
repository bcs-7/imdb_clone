import React, {useState, useEffect} from "react";
import Card from "../card/card";
import "./movielist.css";
import { useParams } from "react-router-dom";

const Movielist= () => {
    const [movielist , setmovielist] = useState([]);
    const {type} = useParams();

     useEffect(()=>{
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

     useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [type])

     const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}`.toLowerCase() + `?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
          .then(res => res.json())
          .then(data => setmovielist(data.results));
      }
      
     return <div className="List_i">
            <h2 className="typex">{(type? type:"popular".toUpperCase())}</h2>
            <div className="List_Cards">
                {
                    movielist?.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
         </div>
     
}
export default Movielist;