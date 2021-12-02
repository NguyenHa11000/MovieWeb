import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './member.css';
import MovieList from '../component/MovieList';
import SearchBox from '../component/SearchBox';
import { Link } from 'react-router-dom';

function Member() {
  const [movies, setMovies] = useState([]);
  
  const [searchValue, setSearchValue] = useState([]);

  const getMoviesRequest = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&page=1'
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
  }

  useEffect ( () => {
    getMoviesRequest()
  }, [])

  
  return (
    <div className="container-fluid movie-app">
      <div className="movie-search d-flex align-items-center mt-4 mb-4">
        <Link to ="/">Home</Link>
        <SearchBox />
        <div>
          {/* <MovieList movies={movieSearch}/> */}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
        </div>
        <div className="col-sm-8 movie-list">
          <div className="row">
            <MovieList movies={movies}/>
          </div>
        </div>
        <div className="col-sm-2">
        </div>
      </div>
    </div>
  );
}

export default Member;
