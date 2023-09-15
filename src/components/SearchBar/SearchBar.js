import { Wrapper } from './SearchBar.styled';
import { useSearchParams } from "react-router-dom";

export const SearchBar = ({ children }) => {
    const [, setSearchParams] = useSearchParams();

const resetFilters = () => {
    setSearchParams({
        topic: '',
        level: 'all',
        });
    };

    return (
        <Wrapper>
            {children}
            <button onClick={resetFilters}>Reset Filters</button>
        </Wrapper>
    )
}