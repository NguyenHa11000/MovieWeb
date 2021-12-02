import React, {useState, useEffect} from "react";
import MovieList from "../component/MovieList";
import Movie from "../component/Movie";

const MovieResult = (props) => {
    
    return (
        <>
            {props.movies && props.movies.map((movie, index) => (
               <Movie movie={movie}/>
            ))
            }
        </>
    )
}

export default MovieResult;