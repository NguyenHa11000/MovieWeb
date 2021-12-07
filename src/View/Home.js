import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import MovieHeader from "../component/MovieHeader";
import MovieList from '../component/MovieList';

const Home = () => {

    return (
        <div className="home">
            <div className="row">
                <MovieHeader/>  
            </div>
                
            <div className = "">
                <nav>
                    <ul>
                        {/* <li>
                            <Link to="/Type">Thể Loại</Link>
                        </li>
                        <li>
                            <Link to="/favouriteMovie">Yêu thích</Link>
                        </li> */}
                        {/* <li>
                            <Link to="/member">Trang cá nh</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
            <div className="container-fluid movie-app">
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-8 movie-list">
                        <h2>PHIM HAY</h2>
                        <div className="row">
                        <MovieList type={'popular'}/>
                        </div>
                    </div>
                    <div className="col-sm-2">
                    </div>
                </div>
            </div>
            <div className="row">   
                <div className="col-lg-2">
                </div>
                <div className="col-lg-8 mv-list2">
                    <h3>Top Rated</h3>
                    <div className="row">
                        <MovieList type={'top_rated'}/>
                    </div>
                </div>  
                <div className="col-lg-2">
                </div>  
            </div>
        </div>
    )
}

export default Home;

//     const [movies, setMovies] = useState([]);
  
//     const [searchValue, setSearchValue] = useState([]);
    
//     const [type, setType] = useState('popular');

//     const getMoviesRequest = async (type) => {
//     const url = `https://api.themoviedb.org/3/movie/${type}?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&page=1`
//     const response = await fetch(url);
//     const responseJson = await response.json();
//     setMovies(responseJson.results);
//   }

//   useEffect ( () => {
//     getMoviesRequest(type)
//   }, [type])
    