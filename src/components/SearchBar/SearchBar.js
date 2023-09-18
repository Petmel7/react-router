import { Wrapper } from './SearchBar.styled';
import { useQueryParams } from '../../hoocks/useQueryParams';

export const SearchBar = ({ children }) => {
    const { reset } = useQueryParams();

    return (
        <Wrapper>
            {children}
            <button onClick={reset}>Reset Filters</button>
        </Wrapper>
    )
}