import React, {useEffect, useState} from 'react'
import QuizSingle from './QuizSingle'
import {getUserQuizzes} from '../services/quizzes'

export default function QuizList(props) {
    const [quizzes, setQuizzes] = useState([])

    useEffect(()=>{
        (async()=>{
            const quizzes = await getUserQuizzes(props.currentUser.id)
            setQuizzes(quizzes)
        })();
    }, [])

    return (
        <div className="mt-5 flex flex-wrap justify-evenly">
            
            {quizzes.map(quiz => <QuizSingle quiz={quiz} />)}
        </div>
    )
}
