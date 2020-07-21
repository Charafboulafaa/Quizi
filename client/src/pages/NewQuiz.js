import React, {useState} from 'react';
import Input from '../components/FormInput';
import {createQuiz} from '../services/quizzes';
import {useHistory} from 'react-router-dom';

export default function NewQuiz(props) {

  const history = useHistory()

    const [quiz, setQuiz] = useState({name:''})
    
    const [questions, setQuestions] = useState([
        {
          question: '',
          answers_attributes: [
            { content: '', is_correct:false },
            { content: '', is_correct:false },
            { content: '', is_correct:false }
          ]
        }
    ])
      
    const handleQuizNameChange = (e) => {
      setQuiz({name: e.target.value})
    }

    const addQuestion = () => {
      setQuestions(
        [
          ...questions,
          {
            question: '',
            answers_attributes: [
              { content: '', is_correct:false },
              { content: '', is_correct:false },
              { content: '', is_correct:false }
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
            currentQuestion.answers_attributes[answerIndex].content = value
        }

        let editedQuestions = questions.map((question, index) => (
          questionIndex == index ? currentQuestion : question 
        ))

        setQuestions(editedQuestions)
    }

    const handleSubmit = async () => {
      const newQuiz = await createQuiz(quiz, questions)

      props.setQuizzes([...props.quizzes, newQuiz])

      history.push('/')
    }

        

    return (
        <div className="p-8 flex flex-col max-w-md mx-auto">

          <div className="my-2">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-900" type="text" placeholder="Quiz Name" value={quiz.name} onChange={(e) => handleQuizNameChange(e)}/>
          </div>

        {questions.map((question, index) => (
            <Input question={question} index={index} handleChange={handleChange}/>
        ))}

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addQuestion}>Add Question</button>

        <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-3" onClick={handleSubmit}>Submit</button>

        

        </div>
    )
}
