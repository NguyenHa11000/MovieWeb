import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {
    return (
        <>
            {props.movies && props.movies.map((movie, index) => (
               <Movie movie={movie}/>
            ))
            }
        </>
    )
}

export default MovieList;