import { HiOutlineSearch } from 'react-icons/hi';
import SearchContainer from './styles';
import { useState } from 'react';

export default function SearchBar() {
  const [inputActive, setInputActive] = useState(false);

  function handleFocus() {
    setInputActive(true);
  }

  function handleBlur() {
    setInputActive(false);
  }

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder={!inputActive ? 'Search for products' : ''}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
      <button>
        <HiOutlineSearch />
      </button>
    </SearchContainer>
  );
}
