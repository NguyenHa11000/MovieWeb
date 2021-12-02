import React from "react";
import { Link } from "react-router-dom";
import MovieResult from "../View/MovieResults";

const SearchBox = (props) => {
    return (
        <>
            <div className="col col-sm-4">
            <input className ="form-control" 
                value={props.value}
                onChange={(event)=> props.setSearchValue(event.target.value)}
                onKeyPress={(event)=> {
                    if(event.key === "Enter"){
                        <Link to="/result"></Link>
                    }
                }}
                placeholder='type to search....'>   
            </input>
            </div>
        </>
    )
}

export default SearchBox;