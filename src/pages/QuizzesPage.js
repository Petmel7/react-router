
import { useEffect, useState } from 'react';
import { TopicFilter } from '../TopicFilter';
import { QuizList } from '../components/QuizList/QuizList';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { LevelFilter } from '../LevelFilter';
import { fetchQuizzes, deleteQuizApi } from '../Api';
import { Link, useLocation } from 'react-router-dom';
import { useQueryParams } from '../hoocks/useQueryParams';

export const QuizzesPage = () => {
    const location = useLocation();
    console.log('location', location)

    const { topic, level } = useQueryParams();

    console.log(
        'Спрацював topicFilter', topic,
        'Спрацював levelFilter', level
    );

    const [quizItems, setQuizItems] = useState([]);
    const [loading, setLoading] = useState(false)

        useEffect(() => {
        async function getQuizzes() {
            try {
                setLoading(true);
                const quizItems = await fetchQuizzes();
                console.log('quizItems', quizItems)
                setQuizItems(quizItems)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getQuizzes();
    }, []);

    const deleteQuiz = async quizId => {
        try {
            const deletedQuiz = await deleteQuizApi(quizId);
            setQuizItems(prevState =>
                prevState.filter(quiz => quiz.id !== deletedQuiz.id));
        } catch (error) {
            console.log(error)
        }
    };

    const getVisibleQuizItem = () => {
        const lowerCaseTopic = (topic ?? '').toLowerCase(); 
        return quizItems.filter(quiz => {
            const hasTopic = (quiz.topic ?? '').toLowerCase().includes(lowerCaseTopic);
            const hasMatchingLevel = level === 'all' ?? quiz.level === level;
            return hasTopic && hasMatchingLevel;
        });
    };

    const visibleQuizItem = getVisibleQuizItem();

    return (
        <div>
            <SearchBar>
                <TopicFilter />
        
                <LevelFilter />
            </SearchBar>

            <div>
                <Link to="/create">Create</Link>
            </div>

            {loading ? (
                <div>LOADING...</div>
            ) : (
                <QuizList
                    items={visibleQuizItem}
                    onDelete={deleteQuiz} />)}
        </div>
    );
};

export default QuizzesPage;