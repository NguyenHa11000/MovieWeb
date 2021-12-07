import React from "react";
import SearchBox from "../component/SearchBox";


const MovieHeader = () => {
    return (
        <>  
            <div className="header d-flex align-items-center mt-4 mb-4">
               <div>
                    <h1>MOVIE WEB</h1> 
               </div>  
                <SearchBox />
            </div>              
        </>
    )
}

export default MovieHeader;