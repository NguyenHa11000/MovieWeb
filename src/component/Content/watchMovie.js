import React, {useState, useEffect} from "react";
import './watchMovie.css';
import MovieHome from "./MovieHome";
import MovieHeader from "../Layout/MovieHeader";
const WatchMovie = () => {

    const location = window.location.href
    const index = location.lastIndexOf('/') + 1
    const idMovie = location.substring(index)
    const [key, setKey] = useState('');
    const getKeyVideo = async () => {
        const url = `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US`
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson)
        setKey(responseJson.results[0].key)
    } 
    useEffect ( () =>{
        getKeyVideo()
        
    },[])   
    return (
        <>
        <div className="watchMv">
            <MovieHeader/>
            <div className="Video row">
                <div className=" col-sm-2">
                </div>
                <div className=" col-sm-6">
                    <iframe src={`https://www.youtube.com/embed/${key}`} frameBorder={0} allowFullScreen ng-show="showvideo" className="iframe"></iframe>
                    {/* <div>
                        <button type="button" onClick={}></button>
                    </div> */}
                </div> 
                <div className="col-lg-2 up">
                    <div>
                    <MovieHome type={'upcoming'} s={4}/>
                    </div>
                </div>
                <div className=" col-sm-2">
                </div>
            </div>
        </div> 
        </>
    )
}

export default WatchMovie;