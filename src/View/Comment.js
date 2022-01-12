import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderCmt from "../component/Layout/RenderCmt";

const Comment = (props) =>{
    let name = sessionStorage.getItem('username');
    let idMovie = props.id;
    const [comment, setComment] = useState('');
    const [viewComment, setViewComment] = useState(localStorage.getItem('comment') ? JSON.parse(localStorage.getItem('comment')) : []);
    const saveCmt = () =>{
        if (comment != ''){
            let cmt = [...viewComment]
            var today = new Date()
            const getCurrentTime = today.getDate()+'-'+ (today.getMonth()+1) +'-'+today.getFullYear()
            cmt.push({id: idMovie, content: comment,username: name, timeCmt: getCurrentTime});
            localStorage.setItem('comment', JSON.stringify(cmt));
            setViewComment(cmt);
            console.log(JSON.parse(localStorage.getItem('comment')));
            
            console.log(today.getDate()+' '+ (today.getMonth()+1) +' '+today.getFullYear())
        }
    }

    return(
        <>
        <div style={{backgroundColor: "white"}}>
            <div style={{paddingTop: "8px" }}>
                <input type="text" 
                    onChange={(event)=>{setComment(event.target.value)}}
                    // onKeyPress={handleKeyPress}
                ></input>
                <button type="button"
                    onClick={saveCmt}
                >Bình luận</button>
            </div>
            <div >
                <RenderCmt List = {viewComment} id = {idMovie}/>
            </div>
        </div>

        </>
    )
}

export default Comment;