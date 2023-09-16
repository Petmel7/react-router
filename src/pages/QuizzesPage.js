
import { useEffect, useState } from 'react';
import { TopicFilter } from '../TopicFilter';
import { QuizList } from '../components/QuizList/QuizList';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { LevelFilter } from '../LevelFilter';
import { fetchQuizzes, deleteQuizApi } from '../Api';
import { Link } from 'react-router-dom';
import { useQueryParams } from '../hoocks/useQueryParams';

export const QuizzesPage = () => {
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





// // import { useSearchParams } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import { TopicFilter } from '../TopicFilter';

// import { QuizList } from '../components/QuizList/QuizList';
// import { SearchBar } from '../components/SearchBar/SearchBar';
// // import { AppLayout } from '../AppLayout';
// // import { QuizForm } from '../components/QuizForm/QuizForm';
// import { LevelFilter } from '../LevelFilter';
// // import { TopicFilter } from './TopicFilter';
// import { createQuizApi, deleteQuizApi, fetchQuizzes } from '../Api';
// // import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { Container } from '../AppLayout';

// const localStorageKey = 'quiz-filters';

// const initialFilters = {
//     topic: '',
//     level: 'all',
// };

// const getInitialFilters = () => {
//     const savedFilters = localStorage.getItem(localStorageKey);
//     if (savedFilters !== null) {
//         try {
//             return JSON.parse(savedFilters);
//         } catch (error) {
//             console.error('Помилка при розборі збережених фільтрів:', error);
//         }
//     }
    
//     return initialFilters;
// };

// export const QuizzesPage = () => {
    
//     const [quizItems, setQuizItems] = useState([]);

//     const [filters, setFilters] = useState(getInitialFilters);

//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         async function getQuizzes() {
//             try {
//                 setLoading(true);
//                 const quizItems = await fetchQuizzes();
//                 setQuizItems(quizItems)
//             } catch (error) {
//                 console.log(error)
//             } finally {
//                 setLoading(false)
//             }
//         }
//         getQuizzes();
//     }, []);

//     useEffect(() => {
//         localStorage.setItem(localStorageKey, JSON.stringify(filters));
//     }, [filters]);

//     const resetFilters = () => {
//         setFilters(initialFilters);
//     };

//     const changeTopicFilter = newTopic => {
//         setFilters(prevState => ({
//             ...prevState,
//             topic: newTopic,
//         }));
//         console.log(newTopic)
//     };

//     const changeLevelFilter = newLevel => {
//         setFilters(prevState => ({
//             ...prevState,
//             level: newLevel,
//         }));
//     };

//     // const addQuiz = async newQuiz => {
//     //     try {
//     //         const createdQuiz = await createQuizApi(newQuiz);
//     //         console.log('Отримано відповідь від сервера:', createdQuiz);
//     //         setQuizItems(prevState => [...prevState, createdQuiz]);
//     //     } catch (error) {
//     //         console.error('Помилка при створенні тесту:', error);
//     //     }
//     // };

//     const deleteQuiz = async quizId => {
//         try {
//             const deletedQuiz = await deleteQuizApi(quizId);
//             setQuizItems(prevState =>
//                 prevState.filter(quiz => quiz.id !== deletedQuiz.id));
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     const getVisibleQuizItem = () => {
//         const lowerCaseTopic = (filters.topic ?? '').toLowerCase();
//         // console.log()   
//         return quizItems.filter(quiz => {
//             const hasTopic = (quiz.topic ?? '').toLowerCase().includes(lowerCaseTopic);
//             // console.log(hasTopic)
//             const hasMatchingLevel = filters.level === 'all' ?? quiz.level === filters.level;
//             // console.log(hasMatchingLevel)
//             return hasTopic && hasMatchingLevel;
//         });
//     };


//     const visibleQuizItem = getVisibleQuizItem();

//     return (
//         <>
//             <SearchBar onReset={resetFilters}>
//                 <TopicFilter
//                     value={filters.topic}
//                     onChange={changeTopicFilter} />
        
//                 <LevelFilter
//                     value={filters.level}
//                     onChange={changeLevelFilter} />
//             </SearchBar>

//             {/* <QuizForm onAdd={addQuiz} /> */}

//             <div>
//                 <Link to="/create">Create</Link>
//             </div>

//             {loading ? (
//                 <div>LOADING...</div>
//             ) : (
//                 <QuizList
//                     items={visibleQuizItem}
//                     onDelete={deleteQuiz} />)}
//         </>
//     );
// };

// export default QuizzesPage;

