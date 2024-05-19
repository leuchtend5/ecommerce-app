import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  & > input {
    display: flex;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid white;
    height: 30px;
    width: 11rem;
    color: white;
    outline: none;
    text-align: right;

    &::placeholder {
      color: white;
      font-size: 1rem;
      font-weight: normal;
      opacity: 0.5;
    }
  }

  & > button {
    position: absolute;
    display: flex;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 1.7rem;
    cursor: pointer;
  }
`;

export { SearchContainer };
