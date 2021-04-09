import './App.css';
import React from 'react'

import Function from './components/Function';
import Header from './components/Header';
import Details from './components/Details';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

 

  return (
    <div >
      <Router>
        <Header/>
          <Switch>

            <Route exact path="/users/:id">
              <Details/>
            </Route>

            <Route  exact path="/">
              <Function/> 
            </Route>

            <Route exact path="/users/profile/:id">
              <Profile/>
            </Route>

          </Switch>
      </Router>
    
     
       
    </div>
  );
}

export default App;
