import api from './api-helper'

export const getQuizzes =async ()=>{
    const res = await api.get('/quizzes')
}

export const getUserQuizzes =async (id)=>{
    const res = await api.get(`/users/${id}`)

    return res.data.quizzes
}

export const createQuiz = async(newQuiz, newQuestions) => {
    newQuiz['questions_attributes'] = newQuestions

    const res = await api.post('/quizzes', {quiz:newQuiz})

    return res.data
}