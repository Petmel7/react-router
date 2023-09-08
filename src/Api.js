import axios from "axios";

axios.defaults.baseURL = 'https://64fad8fecb9c00518f7a45bf.mockapi.io';

export const fetchQuizzes = async () => {
    const response = await axios.get('/quizzes');
    return response.data;
}

export const deleteQuizApi = async quizId => {
    const response = await axios.delete(`/quizzes${quizId}`);
    return response.data;
}

export const createQuizApi = async (newQuiz) => {
    const response = await axios.post('/quizzes', newQuiz);
    return response.data;
}