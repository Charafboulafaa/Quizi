import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


export default function Quiz(props) {
    let { id } = useParams()

    const [quiz, setQuiz] = useState(null)

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [score, setScore] = useState(0)


    useEffect(() => {
        const quiz = props.quizzes.filter(quiz => quiz.id === +id)
        setQuiz(quiz[0])
    }, [])

    const submitAnswer = (isCorrect) => {
        if(isCorrect && score <= quiz.questions.length-1){
            let newScore = score + 1
            setScore(newScore)
        }

        let index = currentQuestion + 1
        if(index < quiz.questions.length){
            setCurrentQuestion(index)
        }
    }

    return (
        <>
        {quiz && <div className="my-5">
            <div className="my-3 text-right">Score : {score + '/' + quiz.questions.length}</div>

            <h1 className="text-5xl font-bold text-teal-600">{quiz.name}</h1>

            <div className="my-8 p-6 text-2xl border-2 border-teal-800 rounded-sm">{quiz.questions[currentQuestion].question}</div>

            <div className="flex justify-evenly">
                {quiz.questions[currentQuestion].answers.map(answer => (
                    <div className="p-4 border border-teal-800 rounded-sm hover:bg-teal-700 hover:text-white cursor-pointer" onClick={() => submitAnswer(answer.is_correct)}>{answer.content}</div>
                ))}
                
            </div>
        </div>}
        </>
    )
}
