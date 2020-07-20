import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Quiz from './pages/Quiz';
import {Switch, Route} from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container mx-auto">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/quiz/:id">
            <Quiz />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
