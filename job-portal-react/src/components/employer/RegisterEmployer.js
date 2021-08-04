import AdminNavbar from '../AdminNavbar';
import { useParams  } from "react-router";
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const RegisterEmployer = ({status, addEmployerCallback, updateEmployerCallback})=>{
    let history = useHistory();
    const {id:eid} = useParams();
    const initialState = {name: '',username:'', cname: '',password:'',number:'' };
    const [employer, setEmployer] = useState(initialState);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
  
      setEmployer({ ...employer, [name]: value });
    };


    useEffect(() => {
        fetch('http://localhost:8000/api/employer/'+eid).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                setEmployer({ 
               
                 name:result.name,
                 cname:result.cname,
                 username:result.username,
                 password:result.password,
                 number:result.number,
                 

              })
        })
    })
    },[]);
    return(
        
        <th>
            {employer.name}
            <AdminNavbar/>
            <br/>
            <h3> Employer Page:{eid} </h3>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    status=='add'?addEmployerCallback(employer):updateEmployerCallback(eid,employer);
                    history.push("/employer/list");
                }}
            >
                Employer Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <input type='text' name='name'  value={employer.name} onChange={handleInputChange} /> <br/>
                Company:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='cName' value={employer.cname} onChange={handleInputChange} /> <br/>
                Contact No:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='number' value={employer.number} onChange={handleInputChange} /><br/>
                Username: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <input type='text' name='username'  value={employer.username} onChange={handleInputChange} /><br/>
                Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='password' value={employer.password} onChange={handleInputChange} /><br/>
                <input class="btn btn-fill btn-primary" type='submit' />
            </form>
        </th>
        
    );
}
export default RegisterEmployer;