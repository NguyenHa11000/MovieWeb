import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css';
import { useNavigate } from "react-router-dom";

const Detail = (props) => {
  
    let navi = useNavigate()

    return (
        <>
        <div className="row detail">
            <div className="col-lg-6">
                <img 
                    src={"https://image.tmdb.org/t/p/w500".concat(props.movie.poster_path)} 
                    className="image_detail "
                    onClick={()=>navi(`/Watch/${props.movie.id}`)}    
                > 
                </img>
            </div>
            <div className="text col-lg-6">
                <p>{props.movie.original_title}</p>
                <p>{`Ngày phát hành: ${props.movie.release_date}`}</p>   
            </div>
        </div>
        <div className="row">
            <p>{props.movie.overview}</p> <br/>
            <p>{props.movie.overview}</p> <br/>
            <p>{props.movie.overview}</p> <br/>
            <p>{props.movie.overview}</p> <br/>
        </div>
        </>
    )
}

export default Detail;