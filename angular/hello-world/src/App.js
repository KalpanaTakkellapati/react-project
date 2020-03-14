import React from 'react';
import './App.css';
import { Header } from './Header';
import { EmployeeList } from './EmployeeList';
import { AddEmployee } from './AddEmployee';
import { Route,Switch,BrowserRouter as Router } from 'react-router-dom';
class App extends React.Component {
   render() {
      return (
         <div>
            <Router>
               <Header>
               </Header>
               <Switch>
                  <Route
                     path="/add-emp" 
                     exact={true} 
                     component={AddEmployee}/>
                  <Route
                     path="/list-emp"
                     exact={true}
                     component={EmployeeList}/>
               </Switch>
            </Router>
          </div>
      );
   }
}

export default App;
