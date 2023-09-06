import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { TopicFilter } from '../TopicFilter';

const QuizzesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const topicFilter = searchParams.get('topsc') ?? '';
    const levelFilter = searchParams.get('level') ?? 'all';
    console.log(topicFilter, levelFilter);

    const [quizItems, setQuizItems] = useState([]);
    const [loading, setLOading] = useState(false)

    useEffect(() => { }, []);

    // const changeTopicFilter = newTopic => {
    //     setSearchParams({
    //         topic: newTopic,
    //         level: levelFilter,
    //     })
    // }

    // const changeLevelFilter = newLevel => {
    //     setSearchParams({
    //         topic: topicFilter,
    //         level: newLevel,
    //     })
    // }

    const deleteQuiz = async quizId => {

    }

    return (
        <div>
            <TopicFilter />
            <levelFilter />
        </div>
    )
};

