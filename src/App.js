import { QuizList } from './components/QuizList/QuizList';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Layout } from './Layout';
import { QuizForm } from './components/QuizForm/QuizForm';
import { LevelFilter } from './LevelFilter';
import { TopicFilter } from './TopicFilter';
import { createQuizApi, deleteQuizApi, fetchQuizzes } from './Api';
import { useEffect, useState } from 'react';

const localStorageKey = 'quiz-filters';

const initialFilters = {
  topic: '',
  level: 'all',
}

const getInitialFilters = () => {
  const savedFilters = localStorage.getItem(localStorageKey);
  if (savedFilters !== null) {
    return JSON.parse(savedFilters);
  }
};

export const App = () => {
  const [quizItems, setQuizItems] = useState([]);

  const [filters, setFilters] = useState(getInitialFilters);

  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(filters));
  }, [filters]);

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

  const addQuiz = async newQuiz => {
    try {
      const createdQuiz = await createQuizApi(newQuiz);
      setQuizItems(prevState => [...prevState, createdQuiz]);
    } catch (error) {
      console.log(error)
    }
  }

  const deleteQuiz = async quizId => {
  try {
    const deletedQuiz = await deleteQuizApi(quizId);
    setQuizItems(prevState =>
      prevState.filter(quiz => quiz.id !== deletedQuiz.id));
  } catch (error) {
    console.log(error)
  }
}


  const getVisibleQuizItem = () => {
    const lowerCaseTopic = filters.topic.toLowerCase();

    return quizItems.filter(quiz => {
      const hasTopic = quiz.topic.toLowerCase().includes(lowerCaseTopic);
      const hasMatchingLevel = quiz.level === filters.level;
      return filters.level === 'all' ? hasTopic : hasTopic && hasMatchingLevel;
    });
  };

  const visibleQuizItem = getVisibleQuizItem();

  return (
    <Layout>
      <SearchBar onReset={resetFilters}>
        <TopicFilter
          value={filters.topic}
          onChange={changeTopicFilter} />
        
        <LevelFilter
          value={filters.level}
          onChange={changeLevelFilter} />
      </SearchBar>

      <QuizForm />

      {loading ? (
        <div>LOADING...</div>
      ) : (
        <QuizList
          item={visibleQuizItem}
          onDelete={deleteQuiz} />)}
    </Layout>
  )
}

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