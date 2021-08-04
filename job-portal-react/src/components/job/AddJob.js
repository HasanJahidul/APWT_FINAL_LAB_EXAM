import EmployerNavbar from '../EmployerNavbar';
import { useParams  } from "react-router";
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const AddJob = ({status, addJobCallback, updateJobCallback})=>{
    let history = useHistory();
    const {id:eid} = useParams();
    const initialState = {name: '',quantity:'', price: '' };
    const [job, setJob] = useState(initialState);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
  
      setJob({ ...job, [name]: value });
    };


    useEffect(() => {
      fetch('http://localhost:8000/api/job/'+eid).then((response) => {
        response.json().then((result) => {
            console.warn(result)
            setJob({ 
                quantity:result.quantity,
                 name:result.name,
                 price:result.price,
                 

              })
        })
    })
    },[]);
    return(
        <>
        <EmployerNavbar />
            <br/>
            <h3>{status==='add'?'Add':'Edit'} job Page: {eid}</h3>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    status=='add'?addJobCallback(job):updateJobCallback(eid,job);
                    history.push("/job/list");
                }}
            >
                <th>
                <strong>Company Name:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='text' name='name' value={job.name} onChange={handleInputChange}/> <br/>
                <strong>Job Title: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='title' value={job.title} onChange={handleInputChange} /><br/>
                <strong>Job Location: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='location' value={job.location} onChange={handleInputChange} /><br/>
                <strong>Salary: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='salary' value={job.salary} onChange={handleInputChange} /><br/>
                <input class="btn btn-fill btn-primary" type='submit' value={status==='add'?'Add':'Update'}/>
                </th>
            </form>
        </>
    );
}

export default AddJob;