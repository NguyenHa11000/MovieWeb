import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Rendercmt.css'

const RenderCmt = (props) => {
    var today = new Date()
    let viewComment= props.List
    useEffect(() => {
    }, [viewComment])
    const cmtID = () => {
        var A = [];
        viewComment && viewComment.map((Comment, index)=>{
            if(Comment.id == props.id){
                A.push(Comment);
            }
        })
        return A;
    }
    const getCurrentTime = today.getDate()+'-'+ (today.getMonth()+1) +'-'+today.getFullYear()
    return (
        <>
            {
                cmtID() && cmtID().map ((Comment, index)=>(
                    <div id = "comment" className="row">
                        <div className=" col-lg-1 avatar">
                        </div>
                        <div className=" col-lg-11 cmtcontent">
                            <div className="row">
                                <div  className=" col-lg-9"><h5>{Comment.username}</h5></div>
                                <div className="col-lg-3">{getCurrentTime}</div>
                            </div>
                            
                            <p>{Comment.content}</p>

                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default RenderCmt;