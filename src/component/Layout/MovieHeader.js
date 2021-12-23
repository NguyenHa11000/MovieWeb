import React from "react";
import SearchBox from "./SearchBox";
import { useNavigate} from "react-router";
import { Link } from "react-router-dom";


const MovieHeader = () => {
    let navigate = useNavigate();
    return (
        <>  
            <div className="row">
                <div className=" col-sm-2">
                </div>
                <div className="header d-flex align-items-center mt-4 mb-4 col-sm-6">
                    <div id="name">
                            <h1
                                onClick={()=> navigate('/')}
                            >MOVIE WEB</h1> 
                    </div>  
                    <SearchBox />
                </div>
                <div className=" col-sm-2">
                </div>
            </div>
            <div className="row">
                <div className=" col-sm-2">
                </div>
                <div id="nav-header" className="col-sm-8">
                    <ul id="nav">
                        <li>
                            <Link to="/">TRANG CHỦ</Link>
                        </li>
                        <li>
                        <Link to="#">TRẠNG THÁI</Link> 
                            <ul className="subnav">
                                <li>
                                    <Link to="/popular">Popular</Link>
                                </li>
                                <li>
                                    <Link to="/top_rated">Top_reated</Link>
                                </li>
                                <li>
                                    <Link to="/upcoming">Upcoming</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#">QUỐC GIA</Link>
                        </li>
                        <li>
                            <Link to="#">PHIM DÀI TẬP</Link>
                        </li>
                    </ul>
                </div>
                <div className=" col-sm-2">
                </div>
            </div>              
        </>
    )
}

export default MovieHeader;