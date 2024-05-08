import { HiOutlineSearch } from 'react-icons/hi';
import SearchContainer from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [inputActive, setInputActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  function handleFocus() {
    setInputActive(true);
  }

  function handleBlur() {
    setInputActive(false);
  }

  function handleSearchValue(e) {
    setSearchValue(e.target.value);
  }

  function handleButtonClick() {
    const trimmedSearchValue = searchValue.trim(); // to remove whitespace

    if (trimmedSearchValue !== '') {
      return navigate(`/products?search=${trimmedSearchValue}`);
    }
    return;
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleButtonClick(e);
    }
  }

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder={!inputActive ? 'Search for products' : ''}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyUp={handleKeyPress}
        value={searchValue}
        onChange={(e) => handleSearchValue(e)}
      ></input>
      <button onClick={handleButtonClick}>
        <HiOutlineSearch />
      </button>
    </SearchContainer>
  );
}
