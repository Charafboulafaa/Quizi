import React, {useEffect, useState} from 'react'
import QuizSingle from './QuizSingle'


export default function QuizList(props) {
    return (
        <div className="mt-5 flex flex-wrap justify-evenly">
            
            {props.quizzes.map(quiz => <QuizSingle quiz={quiz} />)}
        </div>
    )
}
