import React, {useEffect, useState} from "react";
import Movie from "../Movie";
import './MovieHome.css';

const MovieHome = (props) => {
    const [movies, setMovies] = useState([]);

    // const [searchValue, setSearchValue] = useState([]);

    const [type, setType] = useState('popular');

    const getMoviesRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/${props.type}?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&page=1`
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
    }
    useEffect ( () => {
        getMoviesRequest()
    }, [])
    const data = (movies) => {
        var A=[]
        movies && movies.map((movie, index) => {
            if (index < props.s){
                A.push(movie)   
            }
        }
        ) 
        return A 
    }
    return (
        <>
            {
                data(movies).map(
                     (movie, index) => (<Movie movie={movie}/>)
                )
            }
        </>
    )
}

export default MovieHome;