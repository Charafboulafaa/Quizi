import React from 'react'
import {Link} from 'react-router-dom'
import {deleteQuiz} from '../services/quizzes'


export default function QuizSingle(props) {

    const handleDelete = async() => {
        await deleteQuiz(props.quiz.id)
        props.setQuizzes(props.quizzes.filter(quiz => quiz.id !== props.quiz.id))
    }

    return (
        <div className="mx-3 my-5 sm:mx-0 sm:w-2/5 md:w-2/5 lg:w-23-perc shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.quiz.name}</div>
            
                <div>
                    <Link to={`/quiz/${props.quiz.id}`}>
                        <button className="bg-teal-400 hover:bg-teal-700 text-white py-1 px-2 rounded mr-2">Play</button>
                    </Link>
                    {props.currentUser.id === props.quiz.user_id &&
                    <>
                        <Link to={`/edit/${props.quiz.id}`}>
                            <button className="bg-orange-400 hover:bg-orange-700 text-white py-1 px-2 rounded mr-2">Edit</button>
                        </Link>
                        <button className="bg-red-400 hover:bg-red-700 text-white py-1 px-2 rounded" onClick={handleDelete}>Delete</button>
                    </>
                    }
                </div>
            
            </div>
        </div>
    )
}
