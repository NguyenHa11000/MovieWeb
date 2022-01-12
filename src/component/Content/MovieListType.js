import React, {useEffect, useState} from "react";
import MFooter from "../Layout/Footer";
import MovieHeader from "../Layout/MovieHeader";
import Movie from "../Movie";
import './MovieListType.css';
import SubMovie from "./SubMovie";

const MovieList = (props) => {
const [movies, setMovies] = useState([]);
const [type, setType] = useState('popular');

const getMoviesRequest = async () => {
const url = `https://api.themoviedb.org/3/movie/${props.type}?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&page=1`
const response = await fetch(url);
const responseJson = await response.json();
setMovies(responseJson.results);
}

useEffect ( () => {
    getMoviesRequest()
    console.log(movies)
}, [])

    return (
        <>
        <div>
            <MovieHeader/>
            <div className="row" style={{marginTop: "20px"}}>
                <div className="col-sm-2">
                </div>
                <div className="col-sm-6">
                    <h3>{props.type}</h3>
                    <div className="row ">
                        {
                            movies && movies.map((movie, index) => (
                            <Movie movie={movie}/>
                            ))
                        }
                    </div>
                   
                </div>
                <div className="col-lg-2">
                    <h3>upcoming</h3> 
                    <div style={{paddingTop: "8px", backgroundColor: "black"}}>
                    <SubMovie type={'upcoming'} />
                    </div>
                </div> 
                <div className="col-sm-2">
                </div>
            </div>
            <MFooter/>
        </div>
        </>
    )
}

export default MovieList;