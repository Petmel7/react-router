import { useSearchParams } from "react-router-dom";

const options = [
    { value: 'all', label: 'All', },
    { value: 'beginner', label: 'Beginner', },
    { value: 'intermediate', label: 'Intermediate', },
    { value: 'advanced', label: 'Advanced', },
];

export const levelFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const level = searchParams.get('level') ?? 'all';

    const defaultOption = options.find(option => option.value === level);

    const changeFilter = option => {
        setSearchParams({
            topic: searchParams.get('topic'),
            level: option.value,
        })
    }

    return (
        <StyledSelect
            options={options}
            value={defaultOption}
            onChange={changeFilter} />
    )
}