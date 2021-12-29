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
            cmt.push({id: idMovie, content: comment,username: name});
            localStorage.setItem('comment', JSON.stringify(cmt));
            setViewComment(cmt);
            console.log(JSON.parse(localStorage.getItem('comment')));
        }
    }

    return(
        <>
        <div>
            <div>
                <input type="text" 
                    onChange={(event)=>{setComment(event.target.value)}}
                    // onKeyPress={handleKeyPress}
                ></input>
                <button type="button"
                    onClick={saveCmt}
                >Bình luận</button>
            </div>
            <div>
                <RenderCmt List = {viewComment}/>
            </div>
        </div>

        </>
    )
}

export default Comment;