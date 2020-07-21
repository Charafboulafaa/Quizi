import React, {useState} from 'react';
import Input from '../components/FormInput';

export default function NewQuiz() {

    const [quiz, setQuiz] = useState({name: ''})
    
    const [questions, setQuestions] = useState([
        {
          question: 'this is a question',
          answers: [
            { answer: 'answer one', correct:false },
            { answer: 'answer 2', correct:true },
            { answer: '3', correct:false }
          ]
        },
        {
          question: 'this is a question',
          answers: [
            { answer: 'answer one', correct:false },
            { answer: 'answer 2', correct:false },
            { answer: '3', correct:true }
          ]
        }
    ])
      
    const addQuestion = () => {
      setQuestions(
        [
          ...questions,
          {
            question: 'this is a question',
            answers: [
              { answer: 'answer one', correct:false },
              { answer: 'answer 2', correct:false },
              { answer: '3', correct:false }
            ]
          }
        ]
      )
    }

    const handleChange = (e, questionIndex, answerIndex) => {
      
        const { name, value } = e.target
        let currentQuestion = questions[questionIndex]

        if (name == 'question') {
            currentQuestion.question = value
        }
        else {
            currentQuestion.answers[answerIndex].answer = value
        }

        let editedQuestions = questions.map((question, index) => (
          questionIndex == index ? currentQuestion : question 
        ))

        setQuestions(editedQuestions)
    }

        

    return (
        <div className="p-8 flex flex-col max-w-md mx-auto">

        {questions.map((question, index) => (
            <Input question={question} index={index} handleChange={handleChange}/>
        ))}

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addQuestion}>Add Question</button>

        </div>
    )
}
