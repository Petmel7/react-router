import toast from 'react-hot-toast';
import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { fetchQuizzesById } from "../Api";
import { AiOutlineArrowLeft } from 'react-icons/ai';


const SingleQuizPage = () => {
    const location = useLocation();
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState(null);

    useEffect(() => {
        async function fetchQuiz() {
            try {
                const fetchdQuiz = await fetchQuizzesById(quizId)
                setQuiz(fetchdQuiz)
            } catch (error) {
                toast.error('ПОМИЛКА', error);
            }
        }
        fetchQuiz();
    }, [quizId]);

// Для цього якщо user заходить з чистої вкладки
    const bakcLinkHref = location?.state?.from ?? '/quizzes';

    return (
        <div>
            <Link to={bakcLinkHref}>
                <AiOutlineArrowLeft />
                Повернутися до Quiz
            </Link>
            SingleQuizPage:
            {quiz && <div>{quiz.topic}</div>}
        </div>
    );
};

export default SingleQuizPage;