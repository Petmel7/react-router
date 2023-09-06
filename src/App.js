
// import { Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import CreateQuizPage from './pages/CreateQuizPage';
// import QuizzesPage from './pages/QuizzesPage';
// import SingleQuizPage from './pages/SingleQuizPage';
// import { AppLayout } from './AppLayout';

// export const App = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<AppLayout />}>
//         <Route index element={<HomePage />} />
//         <Route path='/create' element={<CreateQuizPage />}/>
//         <Route path='/quizzes' element={<QuizzesPage />}/>
//         <Route path='/quizzes/:quizId' element={<SingleQuizPage />}/>
//       </Route>
//     </Routes>
//   );
// }

import { QuizList } from './components/QuizList';
import { SearchBar } from './components/SearchBar';
import { Layout } from './Layout';
import { QuizForm } from './components/QuizForm';
import { levelFilter } from './LevelFilter';
import { TopicFilter } from './TopicFilter';
import { createQuiz, deleteQuiz, fetchQuizzes } from 'api';
import { useState } from 'react';

const localStorageKey = 'quiz-filters';

const initialFilters = {
  topic: '',
  level: 'all',
}

export const App = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [loading, setLoading] = useState(false);

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const changeTopicFilter = newTopic => {
    setFilters(prevState => ({
      ...prevState,
      topic: newTopic,
    }));
  };

  const changeLevelFilter = newLevel => {
    setFilters(prevState => ({
      ...prevState,
      topic: newLevel,
    }));
  };

  const eddQuiz = async newQuiz => {
    try {
      const createdQuiz = await createQuiz(newQuiz);
      setQuizItems(prevState => [...prevState, createdQuiz]);
    } catch (error) {
      console.log(error)
    }
  }

  const deleteQuiz = async quizId => {
    try {
      
    } catch (error) {
      
    }
  }

  const getVisibleQuizItem = () => {
    const lowerCaseTopic = filters.topic.toLowerCase();

    return quizItem.filter(quiz => {
      const hasTopic = quiz.topic.toLowerCase().includes(lowerCaseTopic);
      const hasMatchingLevel = quiz.level === filters.level;
      return filters.level === 'all' ? hasTopic : hasTopic && hasMatchingLevel;
    });
  };

  const visibleQuizItem = getVisibleQuizItem();

  return ()
}