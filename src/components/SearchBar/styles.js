import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid white;
    height: 30px;
    width: 100%;
    color: white;
    padding-left: 25px;
    outline: none;

    &::placeholder {
      color: white;
      font-size: 1rem;
      font-weight: normal;
      opacity: 0.5;
    }
  }

  button {
    position: absolute;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

export default SearchContainer;
