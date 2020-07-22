import React, {useState, useEffect} from 'react';
import Input from '../components/FormInput';
import {updateQuiz} from '../services/quizzes';
import {useHistory, useParams} from 'react-router-dom';

export default function EditQuiz(props) {

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

    const { id } = useParams()

    const setFormData = () => {
        const quiz = props.quizzes.find((quiz)=> quiz.id === +id)

        setQuiz({name: quiz.name})
        setQuestions(quiz.questions.map(question => {
            return {
                ...question,
                answers_attributes: question.answers
            }
        }))
    }

    useEffect(()=>{
        if(props.quizzes.length){
            setFormData()
        }
    }, [props.quizzes])
      
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
      const newQuiz = await updateQuiz(quiz, questions, id)

      props.setQuizzes(props.quizzes.map(quiz=> quiz.id === +id ? newQuiz : quiz))


      history.push('/')
    }

    const handleCheckBoxChange = (e, questionIndex, answerIndex) => {
      let currentQuestion = questions[questionIndex]

      
      currentQuestion.answers_attributes[answerIndex].is_correct = !currentQuestion.answers_attributes[answerIndex].is_correct

      let editedQuestions = questions.map((question, index) => (
        questionIndex == index ? currentQuestion : question 
      ))

      setQuestions(editedQuestions)
    }
        

    return (
        <div className="p-8 flex flex-col max-w-md mx-auto">

          <div className="my-2">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-900" type="text" placeholder="Quiz Name" value={quiz.name} onChange={(e) => handleQuizNameChange(e)}/>
          </div>

        {questions.map((question, index) => (
            <Input question={question} index={index} handleChange={handleChange} handleCheckBoxChange={handleCheckBoxChange}/>
        ))}

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addQuestion}>Add Question</button>

        <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-3" onClick={handleSubmit}>Submit</button>

        

        </div>
    )
}
