import { useSearchParams } from "react-router-dom";

export const TopicFilter = ({ value, onChange }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const topic = searchParams.get('topic') ?? '';

    const changeTopicFilter = evt => {
        setSearchParams({
            topic: evt.target.value,
            level: levelFilter,
        })
    }

    return (
        <input
            type="text"
            value={topic}
            onChange={changeTopicFilter} />
    )
}