import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    
    return (
        <div>
            <nav>
                <ul>
                    {/* <li>
                        <Link to="/Type">Thể Loại</Link>
                    </li>
                    <li>
                        <Link to="/favouriteMovie">Yêu thích</Link>
                    </li> */}
                    <li>
                        <Link to="/member">Thành viên</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;