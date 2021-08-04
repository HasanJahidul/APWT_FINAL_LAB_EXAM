import { Link } from "react-router-dom";

import './style.css';


const AdminNavbar = ()=>{
    return(

       
<nav class="navbar navbar-expand-lg navbar-absolute navbar-transparent fixed-top">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navigation">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                <Link to="/job/add">
                <p>Add Job</p>
                </Link>
                </li>
                <li class="nav-item ">
                <Link to="/job/list">
                    <p>Job List</p>
                </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>



  );
}

export default AdminNavbar;