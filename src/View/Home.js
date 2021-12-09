import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import MovieHeader from "../component/MovieHeader";
import MovieList from '../component/MovieListType';
import MovieHome from "../component/MovieHome";

const Home = () => {

    return (
        <div className="home">
            <div className="row">
                <MovieHeader/>  
            </div>
                
            <div id = "navigation">
                <nav>
                    <ul>
                        <li>
                            <Link to="#">Thể Loại</Link>
                            <div className="subnav">
                                <ul>
                                    <li>
                                        <Link to="/popular">Popular</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Thể Loại</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Thể Loại</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="#">Yêu thích</Link>
                        </li>
                        <li>
                            <Link to="#">Trang cá nh</Link>
                        </li>
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
                <div className="col-lg-6 mv-list2">
                    <h3>Top Rated</h3>
                    <div className="row">
                        <MovieHome type={'top_rated'}/>
                    </div>
                </div> 
                <div className="col-lg-3">
                    <h3>upcoming</h3> 
                    <div>
                    <MovieHome type={'upcoming'}/>
                    </div>
                </div> 
                <div className="col-lg-1">
                </div>  
            </div>
        </div>
    )
}

export default Home;