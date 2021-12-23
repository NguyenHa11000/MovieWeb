import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Form_login.css';
import { useNavigate } from "react-router-dom";

const FormRegister = (props) => {
    
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [username, setUsername] = useState('');
    // const [member, setMember] = useState([]);
    const navigate = useNavigate()
    const checkInfo = () => {
        if(password=='' || rePassword == '' || username== ''){
            alert("KHONG DUOC DE TRONG");
        }
        else {
            if (rePassword != password){
                alert("MAT KHAU NHAP LAI KHONG KHOP");
            }
            else{
                // console.log(member)
                let info = localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')) : [];
                info.push({username: username, password: password});
                localStorage.setItem('info', JSON.stringify(info));
                navigate('/Login')
            }
        }
    }
    return (
        <>
            <div className="container-login">
                <form className="form_login">
                    <h1>Đăng Ký</h1>
                    <div className="form_text">
                        <label for="#">Tên đăng nhập</label>
                        <input type="text"
                            onChange={(event)=>{setUsername(event.target.value)}}
                        ></input>
                    </div>
                    <div className="form_text">
                        <label for="#">Mật khẩu</label>
                        <input type="text"
                            onChange={(event)=>{setPassword(event.target.value)}}
                        ></input>
                    </div>
                    <div className="form_text">
                        <label for="#">Nhập lại mật khẩu</label>
                        <input type="text"
                            onChange={(event)=>{setRePassword(event.target.value)}}
                        ></input>
                    </div>
                    <button onClick={checkInfo}>Đăng ký</button> <br/>
                </form>
            </div>
        </>
    )
}

export default FormRegister;