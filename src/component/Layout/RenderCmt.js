import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Rendercmt.css'

const RenderCmt = (props) => {
    let viewComment= props.List
    useEffect(() => {
    }, [viewComment])
    if(props){
    return (
        <>
        {
            viewComment && viewComment.map ((Comment, index)=>(
                <div id = "comment">
                    <h5>{Comment.username}</h5>
                    <p>{Comment.content}</p>
                </div>
            ))
        }
            
        </>
    )
    }
}

export default RenderCmt;