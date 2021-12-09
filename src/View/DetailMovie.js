import React, {useState, useEffect} from "react";
import Detail from "../component/Detail";
import MovieHeader from "../component/Layout/MovieHeader";

const DetailMovie = () => {
    const location = window.location.href
    const index = location.lastIndexOf('/') + 1
    const idMovie = location.substring(index)

    const [movie, setMovie] = useState('');
    const getDetailMovie = async () => {
        const url =  `
        https://api.themoviedb.org/3/movie/${idMovie}?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US`
        const response = await fetch(url);
        const responseJson = await response.json();
        // if (responseJson.results) {
        //   setMovie(responseJson.results)
        // }
        setMovie(responseJson)
    } 
      
    useEffect (()=>{
        getDetailMovie()
    }, [])
        

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <MovieHeader/>  
                </div>
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-6">
                        <Detail movie={movie}/>
                    </div> 
                    <div className="col-sm-4">
                    </div> 
                </div>
                
            </div>
        </>
    )
}

export default DetailMovie ;