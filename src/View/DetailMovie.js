import React, {useState, useEffect} from "react";
import SubMovie from "../component/Content/SubMovie";
import Detail from "../component/Detail";
import MFooter from "../component/Layout/Footer";
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
            <div className="container-fluid" >
                
                    <MovieHeader/>  
               
                <div className="row" style={{marginTop: "20px"}}>
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-6">
                        <Detail movie={movie}/>
                    </div> 
                    <div className="col-sm-2">
                        <h3>upcoming</h3> 
                        <div style={{paddingTop: "8px", paddingBottom: "8px", backgroundColor: "black"}}>
                        <SubMovie type={'upcoming'} />
                        </div>
                    </div>
                    <div className="col-sm-2">
                    </div> 
                </div>
                <MFooter/>
            </div>
        </>
    )
}

export default DetailMovie ;