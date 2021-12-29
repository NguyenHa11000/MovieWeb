import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css';
import { useNavigate } from "react-router-dom";
import Comment from "../View/Comment";

const Detail = (props) => {
  
    let navi = useNavigate()

    return (
        <>
        <div className="detail">
            <div className="row ">
                <div className="col-lg-6">
                    <img 
                        src={"https://image.tmdb.org/t/p/w500".concat(props.movie.poster_path)} 
                        className="image_detail "
                        onClick={()=>navi(`/Watch/${props.movie.id}`)}    
                    > 
                    </img>
                </div>
                <div className="text col-lg-6 ">
                    <h2 className="original_title">{props.movie.original_title}</h2>
                    <p>{`Ngày phát hành: ${props.movie.release_date}`}</p>   
                </div>
            </div>
            <div className="row overview">
                <p>{props.movie.overview}</p> <br/>
                <p>{props.movie.overview}</p> <br/>
                <p>{props.movie.overview}</p> <br/>
            </div>
            <div className="row ">
                <Comment id={props.movie.id}/>
            </div>
        </div>
        </>
    )
}

export default Detail;