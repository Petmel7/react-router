// import { useSearchParams } from "react-router-dom";

// const options = [
//     { value: 'all', label: 'All', },
//     { value: 'beginner', label: 'Beginner', },
//     { value: 'intermediate', label: 'Intermediate', },
//     { value: 'advanced', label: 'Advanced', },
// ];

// export const levelFilter = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const level = searchParams.get('level') ?? 'all';

//     const defaultOption = options.find(option => option.value === level);

//     const changeFilter = option => {
//         setSearchParams({
//             topic: searchParams.get('topic'),
//             level: option.value,
//         })
//     }

//     return (
//         <StyledSelect
//             options={options}
//             value={defaultOption}
//             onChange={changeFilter} />
//     )
// }

import Select from 'react-select';
import styled from 'styled-components';

const StyledSelect = styled(Select)`
    // width 200 px
`;

const options = [
    { value: 'all', label: 'All', },
    { value: 'beginner', label: 'Beginner', },
    { value: 'intermediate', label: 'Intermediate', },
    { value: 'advanced', label: 'Advanced', },
];

export const levelFilter = ({ value, onChange }) => {
    const defaultOption = options.find(optson => options.value === value);

    return (
        <StyledSelect
            options={options}
            value={defaultOption}
            onChange={optson => onChange(optson.value)} />
    )
}