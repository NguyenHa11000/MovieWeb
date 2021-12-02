import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieResult from "../View/MovieResults";

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');
    const [movieSearch, setMovieSearch] = useState([]);
    let navigate = useNavigate();
    const getDataSearch = async (searchValue) => {
        const url =  `
        https://api.themoviedb.org/3/search/movie?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&query=${searchValue}&page=1&include_adult=false`
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.results) {
          setMovieSearch(responseJson.results)
        }
        // setMovies(responseJson.results);
      } 
    
      useEffect (()=>{
        getDataSearch(searchValue)
      }, [searchValue])
      
    return (
        <>
            <div className="col col-sm-4">
            <input className ="form-control" 
                value={searchValue}
                onChange={(event)=> setSearchValue(event.target.value)}
                onKeyPress={(event)=> {
                    if(event.key === "Enter"){
                        navigate('/result');
                    }
                }}
                placeholder='type to search....'>   
            </input>
            </div>
        </>
    )
}

export default SearchBox;