import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  ${({ level }) =>
    level === 'beginner' &&
    `
    border-color: #55a630;
    background-color: #edf9e6;
  `}

  ${({ level }) =>
    level === 'intermediate' &&
    `
    border-color: #ff9500;
    background-color: #fff0d9;
  `}

  ${({ level }) =>
    level === 'advanced' &&
    `
    border-color: #ff3b30;
    background-color: #f9e7e7;
  `}

  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease;
  }
`;
