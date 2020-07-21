import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Quiz from './pages/Quiz';
import NewQuiz from './pages/NewQuiz';
import {Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import {verifyUser} from './services/auth';
import {getUserQuizzes} from './services/quizzes'

function App() {
  const [quizzes, setQuizzes] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  const handleVerify = async () =>{
    const userData = await verifyUser()
    setCurrentUser(userData)
  }

  const fetchQuizzes = async()=>{
    const quizzes = await getUserQuizzes(currentUser.id)
    setQuizzes(quizzes)
  }

  useEffect(()=>{

    if(currentUser){
      fetchQuizzes()
    }
    else{
      handleVerify()
    }

  },[currentUser])

  return (
    <div className="App">
      <Navbar/>
      <div className="container mx-auto">
        <Switch>
          <Route path="/" exact>
            <Home quizzes={quizzes} currentUser={currentUser}/>
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
            <NewQuiz setQuizzes={setQuizzes} quizzes={quizzes}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
