import React, {useEffect, useState} from "react";
import Movie from "../Movie";
import './MovieListType.css';

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
    // const [isTicking, setIsTicking] = React.useState(false);
    // const [activeIdx, setActiveIdx] = React.useState(0);
    // const bigLength = items.length;

    // const prevClick = (jump = 1) => {
    //     if (!isTicking) {
    //         setIsTicking(true);
    //         setItems((prev) => {
    //             return prev.map((_, i) => prev[(i + jump) % bigLength]);
    //         });
    //     }
    // };

    // const nextClick = (jump = 1) => {
    //     if (!isTicking) {
    //         setIsTicking(true);
    //         setItems((prev) => {
    //             return prev.map(
    //                 (_, i) => prev[(i - jump + bigLength) % bigLength],
    //             );
    //         });
    //     }
    // };

    // const handleDotClick = (idx) => {
    //     if (idx < activeIdx) prevClick(activeIdx - idx);
    //     if (idx > activeIdx) nextClick(idx - activeIdx);
    // };

    // React.useEffect(() => {
    //     if (isTicking) sleep(300).then(() => setIsTicking(false));
    // }, [isTicking]);

    // React.useEffect(() => {
    //     setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    // }, [items]);
    return (
        <>
            {
            movies && movies.map((movie, index) => (
               <Movie movie={movie}/>
            ))
            }
        </>
    )
}

export default MovieList;