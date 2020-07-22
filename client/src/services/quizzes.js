import api from './api-helper'

export const getQuizzes =async ()=>{
    const res = await api.get('/quizzes')
    return res.data
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

export const updateQuiz = async(newQuiz, newQuestions, id) => {
    newQuiz['questions_attributes'] = newQuestions

    const res = await api.put(`/quizzes/${id}`, {quiz:newQuiz})

    return res.data
}

export const deleteQuiz = async (id) => {
    await api.delete(`/quizzes/${id}`)
}