
import axios from "axios";

axios.defaults.baseURL = 'https://650312faa0f2c1f3faeb62c4.mockapi.io';

export const fetchQuizzes = async () => {
    const response = await axios.get('/quizzes');
    return response.data;
}

export const fetchQuizzesById = async quizId => {
    const response = await axios.get(`/quizzes/${quizId}`);
    return response.data;
}

export const deleteQuizApi = async quizId => {
    const response = await axios.delete(`/quizzes/${quizId}`);
    return response.data;
}

export const createQuizApi = async newQuiz => {
    console.log(newQuiz)
    const response = await axios.post('/quizzes', newQuiz);
    return response.data;
}
