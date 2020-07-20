import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Switch, Route} from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container mx-auto">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;