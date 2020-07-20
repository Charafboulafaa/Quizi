import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Quiz from './pages/Quiz';
import NewQuiz from './pages/NewQuiz';
import {Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import {verifyUser} from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleVerify = async () =>{
    const userData = await verifyUser()
    setCurrentUser(userData)
  }

  useEffect(()=>{
    handleVerify()
  },[])

  return (
    <div className="App">
      <Navbar/>
      <div className="container mx-auto">
        <Switch>
          <Route path="/" exact>
            <Home currentUser={currentUser}/>
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} currentUser={currentUser}/>
          </Route>
          <Route path="/register">
            <Register setCurrentUser={setCurrentUser} currentUser={currentUser}/>
          </Route>
          <Route path="/quiz/:id">
            <Quiz />
          </Route>
          <Route path="/new">
            <NewQuiz />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
