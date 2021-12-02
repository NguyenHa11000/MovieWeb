import React from "react";
import './Movie.css';

const Movie = (props) => {
    return (
        <> 
            <div className="container d-lex justify-content-start m-2">
                <img src={"https://image.tmdb.org/t/p/w500".concat(props.movie.poster_path)} 
                     className='image'>
                </img>
                <div className='overlay'>
                    {props.movie.original_title}
                </div>
            </div>
        </>
    )
}

export default Movie;