import React from "react";
import SearchBox from "../component/SearchBox";
import { useNavigate } from "react-router";


const MovieHeader = () => {
    let navigate = useNavigate();
    return (
        <>  
            <div className="header d-flex align-items-center mt-4 mb-4">
               <div>
                    <h1
                        onClick={()=> navigate('/')}
                    >MOVIE WEB</h1> 
               </div>  
                <SearchBox />
            </div>              
        </>
    )
}

export default MovieHeader;