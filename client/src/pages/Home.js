import React from 'react'
import QuizList from '../components/QuizList'

export default function Home(props) {
    return (
        <div>
           {props.currentUser && <QuizList setQuizzes={props.setQuizzes} quizzes={props.quizzes} currentUser={props.currentUser}/>}
        </div>
    )
}
