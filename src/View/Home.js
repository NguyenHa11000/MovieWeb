import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import MovieHeader from "../component/Layout/MovieHeader";
import MovieList from "../component/Content/MovieListType";
import MovieHome from "../component/Content/MovieHome";
import Carousel from "../component/Forms/Carousel";
import SubMovie from "../component/Content/SubMovie";
import MFooter from "../component/Layout/Footer";

const Home = () => {
    const [token, setToken] = useState();
    
    return (
        <div className="home">
            <MovieHeader/>
            
            <div className="content container-fluid movie-app">
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-8 movie-list">
                        <h2>PHIM HAY</h2>
                        <div className="row">
                            <MovieList type={'popular'}/>
                        </div>
                        <div>
                            <Carousel/>
                        </div>
                    </div>
                    <div className="col-sm-2">
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <div className="row" style={{marginTop: "50px"}}>   
                <div className="col-lg-2">
                </div>
                <div className="col-lg-6 mv-list2">
                    <h3>Top Rated</h3>
                    <div className="row">
                        <MovieHome type={'top_rated'}s={12}/>
                    </div>
                    <h3 style={{marginTop: "20px"}}>Top Rated</h3>
                    <div className="row">
                        <MovieHome type={'top_rated'}s={12}/>
                    </div>
                </div> 
                <div className="col-lg-2">
                    <h3>upcoming</h3> 
                    <div style={{paddingTop: "80px", backgroundColor: "blanchedalmond"}}>
                    <SubMovie type={'upcoming'} />
                    </div>
                </div> 
                <div className="col-lg-2">
                </div>  
            </div>
           <MFooter/> 
        </div>
    )
}

export default Home;