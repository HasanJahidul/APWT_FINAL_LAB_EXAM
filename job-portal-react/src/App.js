import RegisterEmployer from './components/employer/RegisterEmployer';
import AddJob from './components/job/AddJob';
import Login from './components/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';;

function App() {
  return (
    <Router>
      
      <Switch>
          <Route exact path='/'> 
          <h1 align="center">Welcome To Job Portal!</h1>
          <Login />
          </Route>
          <Route path='/register'>
              <RegisterEmployer status='add'/>
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
