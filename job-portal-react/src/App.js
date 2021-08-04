import RegisterEmployer from './components/employer/RegisterEmployer';
import AddJob from './components/job/AddJob';
import Login from './components/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
  return (
    <Router>
      
      <Switch>
          <Route exact path='/'> 
          <h1 align="center">Welcome To Job Portal!</h1>
          <Login />
          </Route>
          <Route path='/register'>
              <RegisterEmployer status='add' addJobCallback={addJob}/>
          </Route>

          <Route path='/job/add'>
              <AddJob status='add'/>
          </Route>

          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}

export default App;
