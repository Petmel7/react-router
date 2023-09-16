
import { useSearchParams } from "react-router-dom";
import Select from 'react-select';
import styled from 'styled-components';
import { useQueryParams } from "./hoocks/useQueryParams";

const StyledSelect = styled(Select)`
    width: 250px;
`;

const options = [
    { value: 'all', label: 'All', },
    { value: 'beginner', label: 'Beginner', },
    { value: 'intermediate', label: 'Intermediate', },
    { value: 'advanced', label: 'Advanced', },
];

export const LevelFilter = () => {
    const { level, changeLevel } = useQueryParams();
    // const [, setSearchParams] = useSearchParams();

    const defaultOption = options.find(option => option.value === level);

    // const changeFilter = option => {
    //     setSearchParams({ topic, level: option.value });
    // }

    return (
        <StyledSelect
            options={options}
            value={defaultOption}
            onChange={option => changeLevel(option.value)} />
    )
}