import React from 'react';
import QuizList from '../components/QuizList';
import {Link} from 'react-router-dom'

export default function Home(props) {
    return (
        <div>
            <div className="my-3 flex justify-end">
                <Link to="/new" className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">New Quiz</Link>
            </div>
            <div>
            {props.currentUser && <QuizList setQuizzes={props.setQuizzes} quizzes={props.quizzes} currentUser={props.currentUser}/>}
            </div>
        </div>
    )
}
