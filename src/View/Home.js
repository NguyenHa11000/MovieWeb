import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import MovieHeader from "../component/Layout/MovieHeader";
import MovieList from "../component/Content/MovieListType";
import MovieHome from "../component/Content/MovieHome";
import FormLogin from "../component/Forms/Form_Login";

const Home = () => {

    return (
        <div className="home">
            <MovieHeader/>
            <Link to="/Login">Đăng nhập</Link> 
            <div className="content container-fluid movie-app">
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
            <div>
                
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