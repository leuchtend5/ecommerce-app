import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import SearchBar from '../SearchBar';

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  right: ${({ $open }) => ($open ? '0' : '-100%')};
  position: absolute;
  background-color: white;
  color: black;
  gap: 0.6rem;
  height: 100vh;
  width: 240px;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px 2px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .nav-link {
    cursor: pointer;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    color: black;

    &:hover {
      border-bottom-color: white;
    }

    &:visited {
      color: black;
    }
  }
`;

const CloseButton = styled(MdOutlineClose)`
  font-size: 2rem;
  align-self: flex-end;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  padding: 6px;
`;

const StyledSearchBar = styled(SearchBar)`
  input {
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 18px;
    width: 200px;
    color: black;

    &::placeholder {
      color: black;
    }
  }

  button {
    color: black;
    background-color: #dbdbdb;
    border-radius: 50%;
    padding: 4px;
    font-size: 1.5rem;
  }
`;

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  opacity: ${({ $open }) => ($open ? '1' : '0')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
`;

export { DropdownContainer, CloseButton, StyledSearchBar, Overlay };
