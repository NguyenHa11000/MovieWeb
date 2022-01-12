import React, {useEffect, useState} from "react";
// import Movie from "../Movie";
import './SubMovie.css';
import { useNavigate } from "react-router";

const SubMovie = (props) => {
    const [movies, setMovies] = useState([]);
    const [type, setType] = useState('popular');
    let nav = useNavigate();
    const getMoviesRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/${props.type}?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&page=1`
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
    }

    useEffect ( () => {
        getMoviesRequest()
    }, [])
    
    const original_title = (a) =>{
        if(a.length > 25){
            var A=a.slice(0,25);
            A=A+'...'; 
            console.log(A)
        }
        else{
            return a ;
        }
        return A;
    }
     
    return (
        <>
            {
            movies && movies.map((movie, index) => (
                <div className=" row " style={{margin: "8px", backgroundColor: "rgb(41, 44, 46)" }}>
                    <div className="col-lg-3 col-sm-4" style={{padding: "0px" }}>
                        <img 
                            className="imgsub"
                            src={"https://image.tmdb.org/t/p/w500".concat(movie.poster_path)} 
                        
                        onClick={() => nav(`/detailmovie/${movie.id}`)}
                        >
                        </img>
                    </div>
                
                    <div className="col-lg-9 col-sm-8" style={{fontSize: "12px" , padding: " 0px 8px"}}>
                        {original_title(movie.original_title)}
                    </div>
                </div>
            ))
            }
        </>
    )
}

export default SubMovie;