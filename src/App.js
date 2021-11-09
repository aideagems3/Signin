import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './Signin';
import Profile from './Profile';
import Aiforpic from './Components/Aiforpic.js';



function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin />
  }
  
  
  
  return (
    <div className="wrapper">
      
      <BrowserRouter>

        <Switch>
          <Route path="/profile">
            <Profile />
           
          </Route>

          <Route path="/">
            <Profile />

          </Route>

          <Route path="/src/Aiforpic.js">
            <Aiforpic />

          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
  
  
    
    
  
}

export default App;