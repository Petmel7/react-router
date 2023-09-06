// import { useSearchParams } from "react-router-dom";

// export const TopicFilter = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const topic = searchParams.get('topic') ?? '';

//     const changeFilter = evt => {
//         setSearchParams({
//             topic: evt.target.value,
//             level: searchParams.get('level'),
//         })
//     }

//     return (
//         <input
//             type="text"
//             value={topic}
//             onChange={changeFilter} />
//     )
// }

export const TopicFilter = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={evt => onChange(evt.target.value)} />
    )
}