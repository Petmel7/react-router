import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { QuizForm } from '../components/QuizForm/QuizForm';
import { createQuizApi } from '../Api';



const CreateQuizPage = () => {

    const addQuiz = async newQuiz => {
        try {
            await createQuizApi(newQuiz);
            toast.success('Все добре Quiz додався')
        } catch (error) {
            toast.error('Помилка при створенні тесту:', error);
        }
    };

    return (
        <div>
            <div>
                <Link to="/quizzes"><AiOutlineArrowLeft/>Повернутися до quizzes</Link>
            </div>
            <QuizForm onAdd={addQuiz} />
        </div>
    );
};

export default CreateQuizPage;