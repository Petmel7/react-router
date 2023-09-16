import { useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const topic = searchParams.get('topic') ?? '';
    const level = searchParams.get('level') ?? 'all';

    const changeLevel = newLevel => {
        setSearchParams({ topic, level: newLevel });
    };

    const changeTopic = newTopic => {
        setSearchParams({ level, topic: newTopic });
    }

    return {
        topic,
        level,
        changeLevel,
        changeTopic,
    };
};