import React, {useState, useEffect} from "react";
import { Link, Match } from "react-router-dom";
// import MovieList from "../component/MovieListType";
import Movie from "../component/Movie";
import MovieHeader from "../component/Layout/MovieHeader";
import './MovieResult.css';
import MFooter from "../component/Layout/Footer";

const MovieResult = () => {
  const location = window.location.href
  const index = location.lastIndexOf('/') + 1
  const searchMovie = location.substring(index)
  console.log(searchMovie)
  const [movieSearch, setMovieSearch] = useState([]);

  const getDataSearch = async () => {
    const url =  `
    https://api.themoviedb.org/3/search/movie?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&query=${searchMovie}&page=1&include_adult=false`
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setMovieSearch(responseJson.results)
    }
  } 
  
    useEffect (()=>{
      getDataSearch()
    }, [])
    
  return (
      <>
        <div>
          <MovieHeader/>
          {/* <Link to="/member">Thành Viên</Link>
          <Link to="/">Trang Chủ</Link> */}
          {/* <MovieList movies={movieSearch}/> */}
          <div className="row ">
            <div className=" col-sm-2">
            </div>
            <div className="result col-sm-8">
              <div className="row ">
                {movieSearch && movieSearch.map((movie, index) => (
                <Movie movie={movie}/>
                ))
                }
              </div>
            </div>
            <div className=" col-sm-2">
            </div> 
          </div>
          <MFooter/>
        </div>
      </>
  )
}

export default MovieResult;