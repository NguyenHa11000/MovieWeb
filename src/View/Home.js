import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import MovieHeader from "../component/Layout/MovieHeader";
import MovieHome from "../component/Content/MovieHome";
import SimpleSlider from "../component/Forms/Carousel";
import SubMovie from "../component/Content/SubMovie";
import MFooter from "../component/Layout/Footer";

const Home = () => {
    const [token, setToken] = useState();
    
    return (
        <div className="home">
            <MovieHeader/>
            
            <div className="home_content container-fluid movie-app">
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-8 movie-list">
                        <h2>PHIM HAY</h2>
                        <div style={{padding: "6px",backgroundColor: "black"}}>
                            <SimpleSlider/>
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
                    
                        <MovieHome type={'top_rated'}s={12}/>
                    
                    <h3 style={{marginTop: "20px"}}>Top Rated</h3>
                    
                        <MovieHome type={'top_rated'}s={12}/>
                    
                </div> 
                <div className="col-lg-2">
                    <h3>upcoming</h3> 
                    <div style={{paddingTop: "8px", paddingBottom: "4px", backgroundColor: "black"}}>
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