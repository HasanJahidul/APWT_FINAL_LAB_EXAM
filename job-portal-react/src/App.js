import RegisterEmployer from './components/employer/RegisterEmployer';
import EmployerList from './components/employer/EmployerList'
import AddJobs from './components/job/AddJobs';
import JobsList from './components/job/JobList';
import Login from './components/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState, useEffect } from 'react';

function App() {

  const addJob=(newJob)=>{
    fetch('http://localhost:8000/api/jobs', {
                          method: "Post",
                          headers:{
                              'Content-Type':'application/json'
                          },
                          body: JSON.stringify(newJob)
                      }).then((result)=>{
                          result.json().then((resp)=>{
                            alert(" Job added")
                            getJobData()
                          })
                      })
  }
  const getJobData=()=>{
    fetch("http://localhost:8000/api/jobs").then((response)=>{
      response.json().then((result)=>{
        setJobsList(result);
      })
    })
  }
 const [jobsList, setJobsList] = useState([]);

 const updateJob=(id,editedJob)=>{
  fetch('http://localhost:8000/api/jobs/'+id, {
          method: "PUT",
          headers:{
              'Content-Type':'application/json'
          },
          body: JSON.stringify(editedJob)
      }).then((result)=>{
          result.json().then((resp)=>{
              alert(" Job Updated")
              getJobData()
          })
      }); 
}

useEffect(() => {
  fetch("http://localhost:8000/api/jobs").then((response)=>{
    response.json().then((result)=>{
      setJobsList(result);
    })
  })
},[]);
const deletejob = (id)=>{

  fetch('http://localhost:8000/api/jobs/'+id,
      {
          method: "DELETE",
      }).then((result)=>{
          result.json().then((resp)=>{
              alert("Job Deleted")
              getJobData()
          })
      })
}
//////////////////////////////////////////////

const getEmployerData=()=>{
  fetch("http://localhost:8000/api/employer").then((response)=>{
    response.json().then((result)=>{
      setEmployerList(result);
    })
  })
}
const [employerList, setEmployerList] = useState([]);
const deleteEmployer = (id)=>{

  fetch('http://localhost:8000/api/employer/'+id,
      {
          method: "DELETE",
      }).then((result)=>{
          result.json().then((resp)=>{
              alert("Restaurant has heen Delete")
              getEmployerData()
          })
      })
}
const addEmployer=(newEmployer)=>{
  fetch('http://localhost:8000/api/employer', {
                        method: "Post",
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify(newEmployer)
                    }).then((result)=>{
                        result.json().then((resp)=>{
                          alert(" Employee added")
                          getEmployerData()
                        })
                    })
}
const updateEmployer=(id,editedUser)=>{
  fetch('http://localhost:8000/api/employer/'+id, {
          method: "PUT",
          headers:{
              'Content-Type':'application/json'
          },
          body: JSON.stringify(editedUser)
      }).then((result)=>{
          result.json().then((resp)=>{
              alert(" has heen edited")
              getEmployerData()
          })
      });
}
useEffect(() => {
  fetch("http://localhost:8000/api/employer").then((response)=>{
    response.json().then((result)=>{
      setEmployerList(result);
    })
  })
},[]);
  return (
    <Router>
      
      <Switch>
          <Route exact path='/'> 
          <h1 align="center">Welcome To Job Portal!</h1>
          <Login />
          </Route>
          <Route path='/register'>
              <RegisterEmployer status='add' addEmployerCallback={addEmployer} />
          </Route>
          <Route path='/employer/edit/:id' children={<RegisterEmployer status='edit' updateEmployerCallback={updateEmployer} />} ></Route>
          <Route path='/employer/list'>
            <div>
                <EmployerList list={employerList} deleteCallback={deletejob}/>
            </div>
          </Route>

          <Route path='/job/add'>
              <AddJobs status='add' addJobCallback={addJob}/>
          </Route>
          <Route path='/job/edit/:id' children={<AddJobs status='edit' updateJobCallback={updateJob} />} ></Route>
          <Route path='/job/list'>
            <div>
                <JobsList list={jobsList} deleteCallback={deletejob}/>
            </div>
          </Route>

          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}

export default App;
