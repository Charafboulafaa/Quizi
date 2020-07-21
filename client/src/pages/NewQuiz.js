import React, {useState} from 'react';
import Input from '../components/FormInput';

export default function NewQuiz() {

    const [quizName, setQuizName] = useState('')
    
    const [questions, setQuestions] = useState([
        {
          question: '',
          answers: [
            { answer: '', correct:false },
            { answer: '', correct:false },
            { answer: '', correct:false }
          ]
        }
    ])
      
    const handleQuizNameChange = (e) => {
      setQuizName(e.target.value)
    }

    const addQuestion = () => {
      setQuestions(
        [
          ...questions,
          {
            question: '',
            answers: [
              { answer: '', correct:false },
              { answer: '', correct:false },
              { answer: '', correct:false }
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

          <div className="my-2">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-900" type="text" placeholder="Quiz Name" value={quizName} onChange={(e) => handleQuizNameChange(e)}/>
          </div>

        {questions.map((question, index) => (
            <Input question={question} index={index} handleChange={handleChange}/>
        ))}

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addQuestion}>Add Question</button>

        </div>
    )
}
