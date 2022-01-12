import React from "react";
import { useNavigate } from "react-router";
import './Movie.css';

const Movie = (props) => {
    let navigate = useNavigate();
    return (
        <> 
            <div className="container-1 d-lex justify-content-start m-2" >
                <img src={"https://image.tmdb.org/t/p/w500".concat(props.movie.poster_path)} 
                    className='image'
                    style={{ padding: "4px", backgroundColor: "rgb(32, 32, 31)"}}
                    onClick={() => navigate(`/detailmovie/${props.movie.id}`)}
                    >
                </img>
                <div className='overlay'>
                    {props.movie.original_title}
                </div>
            </div>
        </>
    )
}

export default Movie;