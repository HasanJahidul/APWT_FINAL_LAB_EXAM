import logo from './logo.svg';
import RegisterEmployer from './components/employer/RegisterEmployer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AdminNavbar from './components/AdminNavbar';
import './App.css';

function App() {
  return (
    <Router>
      <AdminNavbar/>
      <Switch>
          <Route exact path='/'> 
              <h1>Welcome Admin!</h1>
          </Route>
          
          <Route path='/register'>
              <RegisterEmployer status='create'/>
          </Route>
          <Route path='*'>
          
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}

export default App;
