import toast from 'react-hot-toast';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchQuizzesById } from "../Api";

const SingleQuizPage = () => {
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState(null);

    useEffect(() => {
        async function fetchQuiz() {
            try {
                const fetchdQuiz = await fetchQuizzesById(quizId)
                // console.log('Результат', fetchdQuiz)
                setQuiz(fetchdQuiz)
            } catch (error) {
                toast.error('ПОМИЛКА', error);
            }
        }
        fetchQuiz();
    }, [quizId]);

    return <div>SingleQuizPage:
        {quiz && <div>{quiz.topic}</div>}</div>
};

export default SingleQuizPage;