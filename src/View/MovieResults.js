import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import MovieList from "../component/MovieList";
import Movie from "../component/Movie";

const MovieResult = (props) => {
    // const [movie, setMovie] = useState(initialState);
    return (
        <>
            <div>
                <Link to="/member">Thành Viên</Link>
                <h1>HELLO</h1>
            </div>
        </>
    )
}

export default MovieResult;