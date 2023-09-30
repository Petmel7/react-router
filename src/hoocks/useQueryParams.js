import { useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log('TopicSearchParams', searchParams)
    const topic = searchParams.get('topic') ?? '';
    const level = searchParams.get('level') ?? '';
    console.log('LEVEL', level)

    const changeLevel = newLevel => {
        setSearchParams({ topic, level: newLevel });
    };

    const changeTopic = newTopic => {
        setSearchParams({ level, topic: newTopic });
    }

    const reset = () => {
    setSearchParams({
        topic: '',
        level: 'all',
        });
    };

    return {
        topic,
        level,
        changeLevel,
        changeTopic,
        reset
    };
};