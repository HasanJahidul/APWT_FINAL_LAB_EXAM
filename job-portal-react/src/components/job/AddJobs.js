import EmployerNavbar from '../EmployerNavbar';
import { useParams  } from "react-router";
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const AddJob = ({status, addJobCallback, updateJobCallback})=>{
    let history = useHistory();
    const {id:eid} = useParams();
    const initialState = {name: '',location:'', salary: '',title:'' };
    const [job, setJob] = useState(initialState);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
  
      setJob({ ...job, [name]: value });
    };


    useEffect(() => {
      fetch('http://localhost:8000/api/jobs/'+eid).then((response) => {
        response.json().then((result) => {
            console.warn(result)
            setJob({ 
                location:result.location,
                 name:result.name,
                 salary:result.salary,
                 title:result.title,
                 

              })
        })
    })
    },[]);
    return(
        <>
        
        <EmployerNavbar/>
            <br/>
            {job.name}
            <h3>{status==='add'?'Create':'Edit'} product Page: {eid}</h3>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    status=='add'?addJobCallback(job):updateJobCallback(eid,job);
                    history.push("/job/list");
                }}
            >
                <strong>Company Name:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='text' name='name' value={job.name} onChange={handleInputChange}/> <br/>
                <strong>Job Title: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='title' value={job.title} onChange={handleInputChange} /><br/>
                <strong>Job Location: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='location' value={job.location} onChange={handleInputChange} /><br/>
                <strong>Salary: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='salary' value={job.salary} onChange={handleInputChange} /><br/>
                <input class="btn btn-fill btn-primary" type='submit' value={status==='add'?'Add':'Update'}/>
            </form>
        </>
    );
}

 export default AddJob;