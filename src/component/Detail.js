import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css';

const Detail = (props) => {
    // console.log(props.movie.belongs_to_collection.name);
    return (
        <>
        <div className="row">
            <div className="col-lg-4">
                <img 
                    src={"https://image.tmdb.org/t/p/w500".concat(props.movie.poster_path)} 
                    className="image "> 
                </img>
            </div>
            <div className="text col-lg-2">
                <h5>{props.movie.original_title}</h5>   
            </div>
        </div>
        <div className="row">
            <p>{props.movie.overview}</p>
        </div>
        </>
    )
}

export default Detail;