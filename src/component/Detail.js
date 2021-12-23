import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css';

const Detail = (props) => {
    const runVideo = () => {
        <iframe width="420" height="315"
            src={`https://www.youtube.com/watch?v=${props.key}`}>
        </iframe>
    }
    return (
        <>
        <div className="row detail">
            <div className="col-lg-6">
                <img 
                    src={"https://image.tmdb.org/t/p/w500".concat(props.movie.poster_path)} 
                    className="image_detail "
                    onClick={runVideo}    
                > 
                </img>
            </div>
            <div className="text col-lg-6">
                <p>{props.movie.original_title}</p>
                <p>{`Ngày phát hành: ${props.movie.release_date}`}</p>   
            </div>
        </div>
        <div className="row">
            <p>{props.movie.overview}</p> 
        </div>
        </>
    )
}

export default Detail;