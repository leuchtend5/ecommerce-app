import { HiOutlineSearch } from 'react-icons/hi';
import { SearchContainer } from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SearchBar({ className, toggle }) {
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

    // hide sidebar menu when user press enter or click the button
    if (toggle) {
      toggle();
    }

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
    <SearchContainer className={className}>
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

SearchBar.propTypes = {
  className: PropTypes.string,
  toggle: PropTypes.func,
};
