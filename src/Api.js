
import axios from "axios";

axios.defaults.baseURL = 'https://6500928118c34dee0cd51f80.mockapi.io';

export const fetchQuizzes = async () => {
    const response = await axios.get('/quizzes');
    return response.data;
}

export const deleteQuizApi = async quizId => {
    const response = await axios.delete(`/quizzes/${quizId}`);
    return response.data;
}

export const createQuizApi = async newQuiz => {
    const response = await axios.post('/quizzes', newQuiz);
    return response.data;
}
