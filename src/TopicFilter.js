
import { useSearchParams } from "react-router-dom";
import { useQueryParams } from "./hoocks/useQueryParams";

export const TopicFilter = () => {
    const { topic, level } = useQueryParams();
    const [, setSearchParams] = useSearchParams();

    const changeFilter = evt => {
        setSearchParams({ topic: evt.target.value, level });
    };

    return (
        <input
            type="text"
            value={topic}
            onChange={changeFilter} />
    );
};